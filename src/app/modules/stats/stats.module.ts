import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecentStatsComponent} from './recent-stats/recent-stats.component';
import {StatsRoutingModule} from "./stats.routing";
import {GameStatsComponent} from './game-stats/game-stats.component';
import {DataModule} from "../../data/data.module";
import {HeroComponent} from './game-stats/hero/hero.component';
import {GameStagesComponent} from './game-stats/game-stages/game-stages.component';
import {PlayerStatsComponent} from './game-stats/player-stats/player-stats.component';
import {TeamStatsComponent} from './game-stats/team-stats/team-stats.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { KitRecordComponent } from './game-stats/kit-record/kit-record.component';
import { TeamCompareComponent } from './game-stats/team-compare/team-compare.component';
import { StatsVideoComponent } from './game-stats/stats-video/stats-video.component';


@NgModule({
  declarations: [
    RecentStatsComponent,
    GameStatsComponent,
    HeroComponent,
    GameStagesComponent,
    PlayerStatsComponent,
    TeamStatsComponent,
    KitRecordComponent,
    TeamCompareComponent,
    StatsVideoComponent
  ],
    imports: [
        CommonModule,
        StatsRoutingModule,
        DataModule,
        NgbModule,
    ]
})
export class StatsModule {
}
