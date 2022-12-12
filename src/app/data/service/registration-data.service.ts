import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../schema/user";
import urlJoin from "url-join";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

  constructor(private httpClient: HttpClient) {
  }

  listRegistrations(): Observable<User[]> {
    return this.httpClient.get<any>(urlJoin(environment.baseUrl, "registrations"), {withCredentials: true})
      .pipe(map(response => response.users))
  }
}
