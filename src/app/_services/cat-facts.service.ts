import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(
    private http: HttpClient
  ) { }

  getFact(): Observable<any> {
    let url = 'https://meowfacts.herokuapp.com/'
    return this.http.get<Observable<string>>(url);
  }
}
