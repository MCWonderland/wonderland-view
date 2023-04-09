import {Component, Input, OnInit} from '@angular/core';
import {GameRecord, PlayerStats, TeamStats} from "../../../../data/schema/stats";
import {PlayerStatsService} from "../../../../core/service/player-stats.service";

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.scss']
})
export class TeamStatsComponent implements OnInit {

  @Input()
  teamStats!: TeamStats;

  @Input()
  gameRecord!: GameRecord;

  active = 1

  constructor(public service: PlayerStatsService) {
  }

  ngOnInit(): void {
  }

  getPotionAcc(playerStats: PlayerStats) {
    return this.service.getPotionAcc(playerStats).toFixed(2)
  }

  getPlayerStatsInTeam() {
    return this.gameRecord.playerStats.filter(ps => this.teamStats.members.includes(ps.owner))
  }
}

