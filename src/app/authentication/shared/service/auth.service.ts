import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url = 'http://127.0.0.1:3000/api/v1';
  constructor(private _http: HttpClient) { }

  register(user: any): Observable<any> {
    return this._http.post<any>(`${this._url}/register`, user);
  }

  login(user: any): Observable<any> {
    return this._http.post<any>(`${this._url}/login`, user)
  }

  getLocalStorageToken(): string | null {
    return localStorage.getItem('token')
  }

  getSessionStorageToken(): string | null {
    return sessionStorage.getItem('token')
  }

  isTokenStored(): boolean {
    return !!this.getLocalStorageToken() || !!this.getSessionStorageToken()
  }

}
