import {Injectable} from '@angular/core';
import {TeamAbility, TeamStats} from "../../data/schema/stats";

@Injectable({
  providedIn: 'root'
})
export class TeamAbilityStatsService {

  constructor() {
  }


  getUses(stats: TeamStats, name: string): number {
    return stats.abilityPurchasedCount?.[name] || 0
  }

  listAllAbilities(): TeamAbility[] {
    return [
      {
        name: "REVOLUTION",
        displayName: "大革命",
      },
      {
        name: "RESTORE_CORE",
        displayName: "修復核心",
      },
      {
        name: "QUICK_RESPAWN",
        displayName: "快速回歸",
      },
      {
        name: "TRAP",
        displayName: "陷阱",
      }
    ]
  }
}
