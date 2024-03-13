import {Injectable} from '@angular/core';
import {GameRecord, PlayerStats} from "../../data/schema/stats";

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() {
  }

  findTeamStats(record: GameRecord, team: TeamColor) {
    return record.teamStats.find(ts => ts.color === team)
  }

  findPlayersInTeam(record: GameRecord, team: TeamColor): PlayerStats[] {
    const members = record.teamStats.find(ts => ts.color === team)?.members || [];
    return record.playerStats.filter(ps => members.includes(ps.owner))
  }

}

export type TeamColor = "RED" | "BLUE"
