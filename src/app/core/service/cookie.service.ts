import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() {
  }

  getCookie(key: string): string | undefined {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(key))
      ?.split('=')[1]
  }
}
