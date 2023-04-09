import {TestBed} from '@angular/core/testing';

import {StatsDataService} from './stats-data.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpTestContainer} from "../../../tests/http-test-container";
import urlJoin from "url-join";
import {environment} from "../../../environments/environment";
import Fakes from "../../../tests/Fakes";

describe('StatsDataService', () => {

  let service: StatsDataService
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testContainer: HttpTestContainer

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    testContainer = new HttpTestContainer(httpTestingController);

    service = new StatsDataService(httpClient)
  });

  it("findGameRecord()", (callback) => {
    const record = Fakes.createGameRecord()

    testContainer
      .onRequestUrl(urlJoin(environment.baseUrl, "stats/game/gameId"))
      .withMethod("GET")
      .verifyRequest((request) => {
        //   assertWithCredential(request)
      })
      .mockResponse(200, record)
      .actionThatSendRequest(service.findGameRecord("gameId"))
      .verifyActionReturn(record)
      .execute(callback)
  })

});
