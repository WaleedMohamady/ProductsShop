import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) { }

  public login(emailAddress: string, password: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + 'api/user/login',
      {
        email: emailAddress,
        password: password,
      },
      { responseType: 'text' }
    );
  }

  public register(
    firstName: string,
    lastName: string,
    emailAddress: string,
    password: string
  ): Observable<string> {
    return this.http.post(
      environment.apiUrl + 'api/user/register',
      {
        firstname: firstName,
        lastname: lastName,
        email: emailAddress,
        password: password,
      },
      { responseType: 'text' }
    );
  }
}