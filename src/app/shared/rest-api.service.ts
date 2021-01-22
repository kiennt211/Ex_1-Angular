import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Instance } from '../shared/instance';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cost } from '../shared/cost';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  getInstances(): Observable<Instance> {
    return this.http.get<Instance>(this.apiURL + '/instance')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(instanceType: string): Observable<Instance> {
    return this.http.get<Instance>(this.apiURL + '/instance/' + instanceType)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  
  getCost(): Observable<Cost> {
    return this.http.get<Cost>(this.apiURL + '/cost')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}    // Error handling 
    handleError(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }
}
