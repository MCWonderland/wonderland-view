import {TestBed} from '@angular/core/testing';

import {RegistrationDataService} from './registration-data.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpTestContainer} from "../../../tests/http-test-container";
import urlJoin from "url-join";
import {environment} from "../../../environments/environment";
import Fakes from "../../../tests/Fakes";
import {assertWithCredential} from "../../../tests/http-test-helper";

describe('RegistrationDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testContainer: HttpTestContainer
  let service: RegistrationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    testContainer = new HttpTestContainer(httpTestingController);

    service = new RegistrationDataService(httpClient);
  });


  it('listRegistrations()', (callback) => {
    const expected = Fakes.createUser()

    testContainer
      .onRequestUrl(urlJoin(environment.baseUrl, "registrations"))
      .withMethod("GET")
      .verifyRequest((request) => {
        assertWithCredential(request)
      })
      .mockResponse(200, {users: [expected]})
      .actionThatSendRequest(service.listRegistrations())
      .verifyActionReturn([expected])
      .execute(callback)
  });
});
