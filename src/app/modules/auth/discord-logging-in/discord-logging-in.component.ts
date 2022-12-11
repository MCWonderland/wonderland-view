import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-discord-logging-in',
  templateUrl: './discord-logging-in.component.html',
  styleUrls: ['./discord-logging-in.component.scss']
})
export class DiscordLoggingInComponent implements OnInit {

  code: string = ""
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.queryParamMap.get('code') || "";
  }

}
