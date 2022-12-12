import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';
import {NavbarComponent} from './layout/content-layout/navbar/navbar.component';
import {JwtModule} from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        allowedDomains: ["*"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
