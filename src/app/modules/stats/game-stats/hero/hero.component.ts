import {Component, Input, OnInit} from '@angular/core';
import {GameRecord} from "../../../../data/schema/stats";

@Component({
  selector: 'app-stats-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input()
  gameRecord!: GameRecord

  constructor() {
  }

  ngOnInit(): void {
  }


  formatDuration(seconds: number): string {
    seconds = Math.round(seconds);
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft.toString().padStart(2, "0")}`;
  }
}
