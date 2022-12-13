import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {mock, MockProxy} from "jest-mock-extended";
import {JwtHelperService} from "@auth0/angular-jwt";
import {CookieService} from "./cookie.service";
import {environment} from "../../../environments/environment";
import Fakes from "../../../tests/Fakes";

describe('UserService', () => {
  let service: UserService;

  let jwtHelperService: MockProxy<JwtHelperService>;
  let cookieService: CookieService

  beforeEach(() => {
    jwtHelperService = mock()
    cookieService = new CookieService()

    service = new UserService(jwtHelperService, cookieService);
  });


  describe('getClientUser', () => {
    it('should return null if token is not set', () => {
      expect(service.getClientUser()).toBeNull();
    });

    it('should return user if token is set', () => {
      const user = Fakes.createUser();

      document.cookie = `${environment.cookieKey}=abc`;
      jwtHelperService.decodeToken.calledWith('abc').mockReturnValue(user);

      expect(service.getClientUser()).toBe(user)
    })
  })
});
