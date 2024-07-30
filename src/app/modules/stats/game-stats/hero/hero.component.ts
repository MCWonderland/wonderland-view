import {Component, Input, OnInit} from '@angular/core';
import {GameRecord} from "../../../../data/schema/stats";
import {McplayerService} from "../../../../core/service/mcplayer.service";
import {DateService} from "../../../../core/service/date.service";
import {RecordService, TeamColor} from "../../../../core/service/record.service";

@Component({
  selector: 'app-stats-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input()
  gameRecord!: GameRecord

  constructor(
    private mcPlayerService: McplayerService,
    private dateService: DateService,
    private recordService: RecordService
  ) {
  }

  ngOnInit(): void {
  }


  teamMembers(record: GameRecord, color: TeamColor): string[] {
    return this.recordService.findTeamStats(record, color)?.members || [];
  }

  healthLeft(record: GameRecord, color: TeamColor): string {
    return this.recordService.findTeamStats(record, color)?.healthLeft?.toFixed(2) || "0";
  }

  formatDuration(seconds: number): string {
    return this.dateService.formatDuration(seconds);
  }

  formatDate(date: string) {
    return this.dateService.formatDate(date);
  }

  getPlayerName(uuid: string): string {
    return this.mcPlayerService.getPlayer(uuid)?.username || ""
  }
}
