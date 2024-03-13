import {Component, Input, OnInit} from '@angular/core';
import {GameRecord, PlayerStats} from "../../../../data/schema/stats";
import {PlayerStatsService} from "../../../../core/service/player-stats.service";
import {TeamAbilityStatsService} from "../../../../core/service/team-ability-stats.service";
import {TeamColor} from "../../../../core/service/record.service";

@Component({
  selector: 'app-team-compare',
  templateUrl: './team-compare.component.html',
  styleUrls: ['./team-compare.component.scss']
})
export class TeamCompareComponent implements OnInit {

  @Input()
  gameRecord!: GameRecord

  @Input()
  leftTeamColor!: TeamColor
  @Input()
  rightTeamColor!: TeamColor

  teamStatsSum: TeamStatsRow[] = []
  abilityStatsSum: TeamStatsRow[] = []

  constructor(
    private playerStatsService: PlayerStatsService,
    private abilityStatsService: TeamAbilityStatsService
  ) {
    this.teamStatsSum = [
      {
        name: "經濟量",
        func: (teamColor: string) => {
          return this.sumStats(value => this.playerStatsService.getTotalEco(value), teamColor).toString()
        }
      },
      {
        name: "擊殺數",
        func: (teamColor: string) => {
          return this.sumStats(value => value.kills, teamColor).toString()
        }
      },
      {
        name: "死亡數",
        func: (teamColor: string) => {
          return this.sumStats(value => value.deaths, teamColor).toString()
        }
      },
      {
        name: "核心傷害",
        func: (teamColor: string) => {
          return this.sumStats(value => value.coreDamages, teamColor).toFixed(0)
        }
      },
      {
        name: "玩家傷害",
        func: (teamColor: string) => {
          return this.sumStats(value => value.playerDamages, teamColor).toFixed(0)
        }
      },
      {
        name: "藥水投擲數",
        func: (teamColor: string) => {
          return this.sumStats(value => value.potionSplashed, teamColor).toString()
        }
      },
      {
        name: "藥水準確率",
        func: (teamColor: string) => {
          const stats = this.playerStatsForTeam(teamColor)
          const acc = stats.reduce((acc, value) => acc + this.playerStatsService.getPotionAcc(value), 0) / stats.length
          return (acc * 100).toFixed(2) + "%"
        }
      }
    ]

    this.abilityStatsSum = abilityStatsService.listAllAbilities().map(ability => {
      return {
        name: ability.displayName,
        func: (teamColor: string) => {
          const team = this.gameRecord.teamStats.find(team => team.color === teamColor)

          if (team === undefined)
            return "0"

          return this.abilityStatsService.getUses(team, ability.name).toString()
        }
      }
    })
  }

  ngOnInit(): void {
  }

  private sumStats(mapFun: (stats: PlayerStats) => number, teamColor: string): number {
    const stats = this.playerStatsForTeam(teamColor)
    return stats.map(mapFun).reduce((a, b) => a + b, 0)
  }

  private playerStatsForTeam(teamColor: string): PlayerStats[] {
    const playerUuids = this.gameRecord.teamStats.find(team => team.color === teamColor)?.members ?? []
    return this.gameRecord.playerStats.filter(value => playerUuids.includes(value.owner))
  }

}

interface TeamStatsRow {
  name: string
  func: (teamColor: string) => string
}
