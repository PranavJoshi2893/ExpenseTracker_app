import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private _url = "http://127.0.0.1:3000/api/v1"
  constructor(private _http: HttpClient) { }


  addExpenseOrEarning(expense: any): Observable<any> {
    return this._http.post<any>(`${this._url}/expense`, expense)
  }

  deleteEntry(id: any): Observable<any> {
    return this._http.delete<any>(`${this._url}/delete/${id}`)
  }

  updateData(id: any, data: any): Observable<any> {
    return this._http.patch<any>(`${this._url}/update/${id}`, data)
  }

  getAllData(): Observable<any> {
    return this._http.get<any>(`${this._url}/getAll`)
  }


}
