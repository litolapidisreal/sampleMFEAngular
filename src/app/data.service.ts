import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Users {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL = "http://localhost:8080"

  public jwt$ = new BehaviorSubject<any>(null);
  castJWT = this.jwt$.asObservable();

  data = [
    {
      "id": 1,
      "name": "Juan dela Cruz",
      "country": "PH"
    },
    {
      "id": 2,
      "name": "Raf dela Cruz",
      "country": "PH"
    },
    {
      "id": 3,
      "name": "Andres Bonifacio",
      "country": "PH"
    }
  ]

  constructor(private http: HttpClient) { }

  setJwt(value: string) {
    this.jwt$.next(value);
  }

  storeSession(token: string) {
    sessionStorage.setItem("jwt", token)
  }

  getSessionToken() {
    return sessionStorage.getItem("jwt");
  }

  getData() {
    return of(this.data);
  }

  requestToken(user: string, pwd: string) {
    const body = {
      username: user,
      password: pwd
    }

    return this.http.post<any>(`${this.API_URL}/token`, body)
  }

  getUsers(jwt: any): Observable<Users[]> {
    let header = new HttpHeaders({
        "Authorization": `Bearer ${jwt}`
      });

    return this.http.get<Users[]>(`${this.API_URL}/users`, {headers: header})
  }

  validateToken(token: string) {
    let header = new HttpHeaders({
      "Authorization" : `Bearer ${token}`
    })

    return this.http.get<any>(`${this.API_URL}/validate`, {headers: header})
  }
}
