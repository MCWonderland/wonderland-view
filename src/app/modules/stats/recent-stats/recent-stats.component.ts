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
      gameRecords.forEach(gameRecord =>
        this.mcPlayerService.loadPlayers(gameRecord.playerStats.map(p => p.owner))
      )
    })
  }

  formatDate(gameRecord: GameRecord): string {
    return this.dateService.formatDate(gameRecord.date)
  }

  getPlayerName(uuid: string): string {
    return this.mcPlayerService.getPlayer(uuid)?.username || ""
  }

  getTeamPlayers(record: GameRecord, color: string): string {
    return record.teamStats.filter(t => t.color === color).flatMap(t => t.members.map(p => this.getPlayerName(p))).join(", ")
  }

  onSelect(record: GameRecord) {
    this.router.navigate(['stats', 'game', record.gameId])
  }

  getType(record: GameRecord) {
    const maxCoreHealth = record.maxCoreHealth;

    if (maxCoreHealth >= 650)
      return "正式"

    if (maxCoreHealth >= 300)
      return "迷你"

    return "快速戰鬥"

  }
}
