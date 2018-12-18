import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { NgxsHmrLifeCycle, NgxsStoreSnapshot } from '@ngxs/hmr-plugin';
import { StateOperations } from '@ngxs/store';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements NgxsHmrLifeCycle<NgxsStoreSnapshot> {
  public hmrNgxsStoreOnInit(ctx: StateOperations<NgxsStoreSnapshot>, snapshot: NgxsStoreSnapshot) {
    console.log('[NGXS HMR] Current state', ctx.getState());
    console.log('[NGXS HMR] Previous state', snapshot);
    ctx.setState({ ...ctx.getState(), ...snapshot });
  }

  public hmrNgxsStoreBeforeOnDestroy(ctx: StateOperations<NgxsStoreSnapshot>): NgxsStoreSnapshot {
    const snapshot: NgxsStoreSnapshot = ctx.getState();
    console.log('[NGXS HMR] Saved state before on destroy', snapshot);
    return snapshot;
  }
}
