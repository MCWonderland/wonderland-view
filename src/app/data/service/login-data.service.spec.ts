import {TestBed} from '@angular/core/testing';

import {LoginDataService} from './login-data.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {HttpTestContainer} from "../../../tests/http-test-container";
import {urlJoin} from "@angular-devkit/build-angular/src/utils";
import {environment} from "../../../environments/environment";
import {assertWithCredential} from "../../../tests/http-test-helper";
import DiscordLoginRequest from "../schema/discord-login-request";

describe('LoginDataService', () => {
  let service: LoginDataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testContainer: HttpTestContainer

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    testContainer = new HttpTestContainer(httpTestingController);

    service = new LoginDataService(httpClient);
  });

  it("loginDiscord()", (callback) => {
    const body: DiscordLoginRequest = {code: "123"};

    testContainer
      .onRequestUrl(urlJoin(environment.baseUrl, "auth/login"))
      .withMethod("POST")
      .verifyRequest((request) => {
        assertWithCredential(request)
      })
      .mockResponse(200, {})
      .actionThatSendRequest(service.loginDiscord(body))
      .verifyActionReturn(true)
      .execute(callback)
  })
});
