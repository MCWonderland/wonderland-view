import {Injectable} from '@angular/core';
import DiscordLoginRequest from "../schema/discord-login-request";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import urlJoin from "url-join";

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private httpClient: HttpClient) {
  }

  loginDiscord(request: DiscordLoginRequest): Observable<boolean> {
    return this.httpClient
      .post<any>(urlJoin(environment.baseUrl, "auth/login"), request, {withCredentials: true})
      .pipe(map(response => true))
  }
}
