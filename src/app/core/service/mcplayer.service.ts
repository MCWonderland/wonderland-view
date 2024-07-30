import {Injectable} from '@angular/core';
import {McProfile} from "../../data/schema/mc-profile";
import {McplayerDataService} from "../../data/service/mcplayer-data.service";
import {forkJoin, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class McplayerService {

  private playerCache: McProfile[] = [];

  constructor(private dataService: McplayerDataService) {
  }

  loadPlayers(uuids: string[]) {
    const observables = uuids.map(uuid => this.fetchPlayer(uuid));
    forkJoin(observables).subscribe(players => this.playerCache.push(...players.filter(p => p !== undefined) as McProfile[]))
  }

  getPlayer(uuid: string): McProfile | undefined {
    return this.playerCache.find(p => p.uuid === uuid)
  }

  private fetchPlayer(uuid: string): Observable<McProfile | undefined> {
    const cachedPlayer = this.playerCache.find(p => p.uuid === uuid);

    if (cachedPlayer) {
      return of(cachedPlayer);
    } else {
      return this.dataService.findProfile(uuid).pipe(
        tap(player => {
          if (player) {
            this.playerCache.push(player);
          }
        })
      );
    }
  }
}
