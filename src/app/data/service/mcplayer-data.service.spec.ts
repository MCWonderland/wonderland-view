import {TestBed} from '@angular/core/testing';

import {McplayerDataService} from './mcplayer-data.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpTestContainer} from "../../../tests/http-test-container";
import urlJoin from "url-join";
import {environment} from "../../../environments/environment";
import {McProfile} from "../schema/mc-profile";

describe('McplayerDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testContainer: HttpTestContainer
  let service: McplayerDataService

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    testContainer = new HttpTestContainer(httpTestingController);

    service = new McplayerDataService(httpClient);
  });

  it('findProfile()', (callback) => {

    const profile: McProfile = {
      uuid: "uuid",
      username: "name",
    }

    testContainer
      .onRequestUrl(urlJoin(environment.baseUrl, "mcplayer/uuid"))
      .withMethod("GET")
      .verifyRequest((request) => {
        // assertWithCredential(request)
      })
      .mockResponse(200, profile)
      .actionThatSendRequest(service.findProfile("uuid"))
      .verifyActionReturn(profile)
      .execute(callback)
  });
});
