import {HttpTestingController} from "@angular/common/http/testing";
import {HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class HttpTestContainer {
  constructor(private httpTestingController: HttpTestingController) {
  }

  onRequestUrl(url: string): RequestTestBuilder {
    return new RequestTestBuilder(this.httpTestingController, url)
  }
}

export class RequestTestBuilder {

  private method!: string
  private status!: number
  private response: any = null
  private observable!: Observable<any>
  private expectedReturn!: any

  mockResponse(status: number, response: any): RequestTestBuilder {
    this.response = response;
    this.status = status;
    return this;
  }

  constructor(
    private httpTestingController: HttpTestingController,
    private url: string,
  ) {
  }

  withMethod(method: string): RequestTestBuilder {
    this.method = method;
    return this;
  }

  execute(callback: () => void) {
    this.observable.subscribe((result) => {
      expect(result).toEqual(this.expectedReturn)
      callback()
    })

    const req = this.httpTestingController.expectOne({
      url: this.url,
      method: this.method
    })

    this.requestVerifier(req.request)

    req.flush(this.response, {status: this.status, statusText: 'OK'})
  }

  actionThatSendRequest(observable: Observable<any>): RequestTestBuilder {
    this.observable = observable;
    return this;
  }

  verifyRequest(requestVerifier: (request: HttpRequest<any>) => void): RequestTestBuilder {
    this.requestVerifier = requestVerifier;
    return this;
  }

  verifyActionReturn(expected: any): RequestTestBuilder {
    this.expectedReturn = expected;
    return this;
  }

  private requestVerifier: (request: HttpRequest<any>) => void = (request) => {
  }
}
