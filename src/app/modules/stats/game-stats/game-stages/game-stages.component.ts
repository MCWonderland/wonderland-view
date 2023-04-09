import {Component, Input, OnInit} from '@angular/core';
import {GameRecord} from "../../../../data/schema/stats";

@Component({
  selector: 'app-game-stages',
  templateUrl: './game-stages.component.html',
  styleUrls: ['./game-stages.component.scss']
})
export class GameStagesComponent implements OnInit {

  @Input()
  gameRecord!: GameRecord

  constructor() {
  }

  ngOnInit(): void {
  }

}
