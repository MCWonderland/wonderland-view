import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {GameProgress, GameRecord} from "../schema/stats";
import {HttpClient} from "@angular/common/http";
import urlJoin from "url-join";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatsDataService {

  constructor(private httpClient: HttpClient) {
  }

  findGameRecord(gameId: string): Observable<GameRecord> {
    return this.httpClient.get<GameRecord>(urlJoin(environment.baseUrl, `stats/game/${gameId}`))
  }

  listGameRecord(): Observable<GameRecord[]> {
    return this.httpClient.get<any>(urlJoin(environment.baseUrl, `stats/game`)).pipe(map(response => response.stats))
  }

  findGameProgress(gameId: string): Observable<GameProgress[]> {
    return this.httpClient.get<any>(urlJoin(environment.baseUrl, `stats/game/${gameId}/progress`)).pipe(map(response => response.stats))
  }

}
