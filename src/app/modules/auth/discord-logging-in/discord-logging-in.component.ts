import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoginDataService} from "../../../data/service/login-data.service";
import {NavigationService} from "../../../core/service/navigation.service";

@Component({
  selector: 'app-discord-logging-in',
  templateUrl: './discord-logging-in.component.html',
  styleUrls: ['./discord-logging-in.component.scss']
})
export class DiscordLoggingInComponent implements OnInit {

  code: string = ""

  constructor(private route: ActivatedRoute,
              private loginDataService: LoginDataService,
              private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.queryParamMap.get('code') || "";
    this.doLogin()
  }

  private doLogin() {
    this.loginDataService.loginDiscord({code: this.code}).subscribe(
      () => this.navigationService.navigateToHome(),
    )
  }
}
