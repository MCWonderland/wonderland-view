import {Component, Input, OnInit} from '@angular/core';
import {GameProgress, GameRecord} from "../../../../data/schema/stats";
import {StatsDataService} from "../../../../data/service/stats-data.service";

@Component({
  selector: 'app-game-stages',
  templateUrl: './game-stages.component.html',
  styleUrls: ['./game-stages.component.scss']
})
export class GameStagesComponent implements OnInit {

  @Input()
  gameRecord!: GameRecord
  progresses: GameProgress[] = []

  constructor(private proxy: StatsDataService) {
  }

  ngOnInit(): void {
    this.proxy.findGameProgress(this.gameRecord.gameId).subscribe((data) => {
      this.progresses = data
    })
  }

}
