import {Component, OnInit} from '@angular/core';
import {GameRecord, TeamStats} from "../../../data/schema/stats";
import {ActivatedRoute} from "@angular/router";
import {StatsDataService} from "../../../data/service/stats-data.service";
import {McplayerService} from "../../../core/service/mcplayer.service";
import {TeamColor} from "../../../core/service/record.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.scss']
})
export class GameStatsComponent implements OnInit {

  gameRecord?: GameRecord
  teamStatsOrder: TeamColor[] = ["RED", "BLUE"]
  url: SafeUrl = ''

  constructor(private route: ActivatedRoute,
              private dataService: StatsDataService,
              private mcPlayerService: McplayerService,
              private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.dataService.findGameRecord(this.route.snapshot.paramMap.get('id') as string).subscribe((gameRecord) => {
      this.gameRecord = gameRecord
      this.mcPlayerService.loadPlayers(gameRecord.playerStats.map(p => p.owner))
      document.title = gameRecord.title
      this.url = this.toSafeUrl(this.convertToEmbedUrl(gameRecord.videoUrl))
    })
  }

  findTeamStats(color: TeamColor): TeamStats | undefined {
    return this.gameRecord?.teamStats.find(ts => ts.color === color)
  }


  toSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  convertToEmbedUrl(url: string): string {
    const id = this.getId(url)
    if (id) {
      return `https://www.youtube.com/embed/${id}`
    }
    return url
  }

  private getId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|live\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

}
