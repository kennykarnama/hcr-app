import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { About } from './About';

@Injectable({
  providedIn: 'root'
})

export class HomeContentService {
  
  API_SERVER = 'http://localhost:8000';

  ABOUT_ENDPOINT = '/about';

  constructor(private http:HttpClient) { }

  /**
   * Get about
   * @return {Observable<About>}
   */
  getAbout():Observable<About>{
    return this.http.get<About>(
      this.API_SERVER+this.ABOUT_ENDPOINT
      ).pipe(catchError(this.handleError));
  } 

  /**
   * Handle error
   * @param {HttpErrorResponse} error
   */
  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};
}
