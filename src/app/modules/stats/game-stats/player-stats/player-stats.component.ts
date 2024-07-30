import {Component, Input, OnInit} from '@angular/core';
import {GameRecord} from "../../../../data/schema/stats";

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {

  @Input()
  gameRecord!: GameRecord

  constructor() {
  }

  ngOnInit(): void {
  }

}
