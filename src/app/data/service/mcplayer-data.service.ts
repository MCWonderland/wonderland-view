import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {McProfile} from "../schema/mc-profile";
import urlJoin from "url-join";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class McplayerDataService {

  constructor(private httpClient: HttpClient) {
  }


  findProfile(uuid: string): Observable<McProfile> {
    return this.httpClient.get<McProfile>(urlJoin(environment.baseUrl, `mcplayer/${uuid}`))
  }
}
