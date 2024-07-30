import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecentStatsComponent} from "./recent-stats/recent-stats.component";
import {GameStatsComponent} from "./game-stats/game-stats.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/stats/recent',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'recent',
        component: RecentStatsComponent
      },
      {
        path: 'game/:id',
        component: GameStatsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule {
}
