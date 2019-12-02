import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unicorn } from './unicorn';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UnicornService {

  // Base url
  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateUnicorn(data): Observable<Unicorn> {
    return this.http.post<Unicorn>(this.baseurl + '/unicorn/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  // GET
  GetUnicorn(id): Observable<Unicorn> {
    return this.http.get<Unicorn>(this.baseurl + '/unicorn/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetUnicorns(): Observable<Unicorn> {
    return this.http.get<Unicorn>(this.baseurl + '/unicorn/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateUnicorn(id, data): Observable<Unicorn> {
    return this.http.put<Unicorn>(this.baseurl + '/unicorn/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteUnicorn(id){
    return this.http.delete<Unicorn>(this.baseurl + '/unicorn/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}