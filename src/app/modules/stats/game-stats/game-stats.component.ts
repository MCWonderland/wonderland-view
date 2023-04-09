import {Component, OnInit} from '@angular/core';
import {GameRecord} from "../../../data/schema/stats";
import {ActivatedRoute} from "@angular/router";
import {StatsDataService} from "../../../data/service/stats-data.service";
import {McplayerService} from "../../../core/service/mcplayer.service";

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.scss']
})
export class GameStatsComponent implements OnInit {

  gameRecord?: GameRecord

  constructor(private route: ActivatedRoute,
              private dataService: StatsDataService,
              private mcPlayerService: McplayerService) {

    this.dataService.findGameRecord(route.snapshot.paramMap.get('id') as string).subscribe((gameRecord) => {
      this.gameRecord = gameRecord
      this.mcPlayerService.loadPlayers(gameRecord.playerStats.map(p => p.owner))
    })
  }

  ngOnInit(): void {
  }

}
