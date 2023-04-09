import {Component, Input, OnInit} from '@angular/core';
import {GameRecord} from "../../../../data/schema/stats";
import {McplayerService} from "../../../../core/service/mcplayer.service";

@Component({
  selector: 'app-stats-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input()
  gameRecord!: GameRecord

  constructor(private mcPlayerService: McplayerService) {
  }

  ngOnInit(): void {
  }


  formatDuration(seconds: number): string {
    seconds = Math.round(seconds);
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft.toString().padStart(2, "0")}`;
  }

  formatDate(date: string) {
    const d = new Date(date);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  }

  getPlayerName(uuid: string): string {
    return this.mcPlayerService.getPlayer(uuid)?.username || ""
  }
}
