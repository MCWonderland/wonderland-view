import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {GameProgress, GameRecord} from "../../../../data/schema/stats";
import {StatsDataService} from "../../../../data/service/stats-data.service";
import {DateService} from "../../../../core/service/date.service";

@Component({
  selector: 'app-game-stages',
  templateUrl: './game-stages.component.html',
  styleUrls: ['./game-stages.component.scss']
})
export class GameStagesComponent implements OnInit {
  @Input()
  gameRecord!: GameRecord;
  progresses: GameProgress[] = [];

  constructor(private proxy: StatsDataService,
              private dateService: DateService,
  ) {}

  ngOnInit(): void {
    this.proxy.findGameProgress(this.gameRecord.gameId).subscribe((data: GameProgress[]) => {
      this.progresses = data;
      this.createChart();
    });
  }

  createChart(): void {
    const ctx = (document.getElementById('gameProgressChart') as HTMLCanvasElement).getContext('2d');
    const times = this.progresses.map(progress => this.dateService.formatDuration(progress.gameTime));

    const blueEconomy: number[] = [];
    const redEconomy: number[] = [];
    const blueHealth: number[] = [];
    const redHealth: number[] = [];

    this.progresses.forEach(progress => {
      progress.teamState.forEach(team => {
        if (team.teamColor === 'BLUE') {
          blueEconomy.push(team.bankBalance + team.playerBalanceTotal);
          blueHealth.push(team.healthLeft);
        } else if (team.teamColor === 'RED') {
          redEconomy.push(team.bankBalance + team.playerBalanceTotal);
          redHealth.push(team.healthLeft);
        }
      });
    });

    new Chart(ctx!!, {
      type: 'line',
      data: {
        labels: times,
        datasets: [
          {
            label: '藍隊經濟',
            data: blueEconomy,
            borderColor: 'rgba(176,224,255,0.66)',
            yAxisID: 'y1', // 經濟數據使用左側 Y 軸
            fill: false
          },
          {
            label: '紅隊經濟',
            data: redEconomy,
            borderColor: 'rgba(255,194,206,0.66)',
            yAxisID: 'y1', // 經濟數據使用左側 Y 軸
            fill: false
          },
          {
            label: '藍隊生命值',
            data: blueHealth,
            borderColor: 'rgb(28,160,255)',
            yAxisID: 'y2', // 健康數據使用右側 Y 軸
            fill: false
          },
          {
            label: '紅隊生命值',
            data: redHealth,
            borderColor: 'rgb(255,0,77)',
            yAxisID: 'y2', // 健康數據使用右側 Y 軸
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: '遊戲時間',
              color: 'rgb(255,255,255)',
              font: {
                size: 16
              }
            }
          },
          y1: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: '經濟變化',
              color: 'rgb(28,255,245)',
              font: {
                size: 16
              }
            }
          },
          y2: {
            type: 'linear',
            position: 'right',
            title: {
              display: true,
              text: '生命值',
              color: 'rgb(255,139,0)',
              font: {
                size: 16,
              }
            },
            grid: {
              drawOnChartArea: false // 右側 Y 軸的網格線不繪製
            }
          }
        }
      }
    });
  }
}
