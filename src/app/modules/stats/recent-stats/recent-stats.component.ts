import {Component, OnInit} from '@angular/core';
import {GameRecord} from "../../../data/schema/stats";
import {McplayerService} from "../../../core/service/mcplayer.service";
import {DateService} from "../../../core/service/date.service";
import {StatsDataService} from "../../../data/service/stats-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recent-stats',
  templateUrl: './recent-stats.component.html',
  styleUrls: ['./recent-stats.component.scss']
})
export class RecentStatsComponent implements OnInit {

  gameRecords: GameRecord[] = []

  constructor(
    private mcPlayerService: McplayerService,
    private dateService: DateService,
    private statsDataService: StatsDataService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.statsDataService.listGameRecord().subscribe(gameRecords => {
      this.gameRecords = gameRecords
    })
  }

  formatDate(gameRecord: GameRecord): string {
    return this.dateService.formatDate(gameRecord.date)
  }

  getPlayerName(uuid: string): string {
    return this.mcPlayerService.getPlayer(uuid)?.username || ""
  }

  onSelect(record: GameRecord) {
    this.router.navigate(['stats', 'game', record.gameId])
  }
}
