import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from 'ng2-redux';

import { UsersModule } from './users/users.modules';

import { AppComponent } from './app.component';
import { CarRoutesModule } from './routes.module';
import { CoreModule } from './Core/core.module';

import { store, IAppState } from './store';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    CarRoutesModule,
    CoreModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor (private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.provideStore(store);
  }
}
