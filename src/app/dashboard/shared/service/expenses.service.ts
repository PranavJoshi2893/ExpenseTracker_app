import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private _url = "http://127.0.0.1:3000/api/v1"
  constructor(private _http: HttpClient) { }


  addExpense(expense: any): Observable<any> {
    return this._http.post<any>(`${this._url}/expense`, expense)
  }

  addEarning(earning: any): Observable<any> {
    return this._http.post<any>(`${this._url}/earning`, earning)
  }

  deleteEntry(id: any): Observable<any> {
    return this._http.delete<any>(`${this._url}/delete/${id}`)
  }

  getAllData(): Observable<any> {
    return this._http.get<any>(`${this._url}/getAll`)
  }


}
