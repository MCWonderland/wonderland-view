import {Injectable} from '@angular/core';
import {User} from "../../data/schema/user";
import {JwtHelperService} from "@auth0/angular-jwt";
import {CookieService} from "./cookie.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private jwtHelperService: JwtHelperService,
              private cookieService: CookieService) {
  }


  getClientUser(): User | undefined {
    const token = this.cookieService.getCookie(environment.cookieKey);

    if (!token)
      return undefined;

    const tokenUser = this.jwtHelperService.decodeToken(token) as TokenUser;

    return {
      isAdmin: tokenUser.isAdmin,
      id: tokenUser.id,
      mcProfile: {
        uuid: tokenUser.mcId,
        username: tokenUser.mcUsername
      },
      discordProfile: {
        id: tokenUser.discordId,
        username: tokenUser.discordUsername
      }
    }
  }

}

interface TokenUser {
  id: string
  discordId: string
  discordUsername: string
  mcId: string
  mcUsername: string
  isAdmin: boolean
}
