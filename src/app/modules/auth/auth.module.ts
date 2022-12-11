import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from "./auth.routing";
import { DiscordLoggingInComponent } from './discord-logging-in/discord-logging-in.component';



@NgModule({
  declarations: [
    LoginComponent,
    DiscordLoggingInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
