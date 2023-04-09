import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GameRecord} from "../schema/stats";
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

}
