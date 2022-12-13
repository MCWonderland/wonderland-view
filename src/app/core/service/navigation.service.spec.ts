import {TestBed} from '@angular/core/testing';

import {NavigationService} from './navigation.service';
import {mock, MockProxy} from "jest-mock-extended";
import {Router} from "@angular/router";

describe('NavigationService', () => {
  let service: NavigationService;
  let router: MockProxy<Router>

  beforeEach(() => {
    router = mock()
    service = new NavigationService(router);
  });

  it('navigateHome()', async () => {
    await service.navigateToHome()
    expect(router.navigateByUrl).toBeCalledWith("/home")
  });
});
