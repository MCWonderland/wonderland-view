import {Injectable} from '@angular/core';
import {PlayerStats} from "../../data/schema/stats";

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  constructor() {
  }

  getPotionAcc(playerStats: PlayerStats) {
    return playerStats.potionTotalAcc / playerStats.potionSplashed
  }

  getEcoFor(playerStats: PlayerStats, type: EcoType): number {
    return playerStats.earnedCoins[type] ?? 0
  }

  getTotalEco(playerStats: PlayerStats): number {
    return this.getEcoFor(playerStats, 'MINE') + this.getEcoFor(playerStats, 'KILL') + this.getEcoFor(playerStats, 'KILL_BANK')
  }
}

export type EcoType = 'MINE' | 'KILL' | 'KILL_BANK'
