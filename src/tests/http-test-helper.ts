import {HttpRequest} from "@angular/common/http";

export function assertWithCredential(request: HttpRequest<any>) {
  expect(request.withCredentials).toBeTruthy()
}
