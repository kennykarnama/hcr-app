import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Singkatan } from './Singkatan';


const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})


export class SingkatanService {

  API_SERVER = 'http://localhost:8000';

  SINGKATAN_ENDPOINT = '/uncommon_abbreviation';

  UPDATE_SINGKATAN_ENDPOINT = '/update/meaning';

  APPEND_SINGKATAN_ENDPOINT = '/append/meaning';

  constructor(private http:HttpClient) { }

  /**
   * List singkatan
   * @return {Observable}
   */
  listSingkatan():Observable<Singkatan[]>{
  	return this.http.get<Singkatan[]>(this.API_SERVER+this.SINGKATAN_ENDPOINT)
  	.pipe(catchError(this.handleError));
  }
  /**
   * Create new abbreviation
   * @param  {Singkatan}             s 
   * @return {Observable<Singkatan>}
   */
  insertSingkatan(s:Singkatan):Observable<Singkatan>{
    return this.http.post<Singkatan>(
      this.API_SERVER+this.SINGKATAN_ENDPOINT,
      s
    ).pipe(catchError(this.handleError));
  }
  /**
   * Delete abbreviation
   * @param  {Singkatan}             s
   * @return {Observable<Singkatan>}
   */
  deleteSingkatan(s:Singkatan):Observable<Singkatan>{
    return this.http.delete<Singkatan>(
      this.API_SERVER+this.SINGKATAN_ENDPOINT+'/'+s.abbreviation
      ).pipe(catchError(this.handleError));
  }

  updateSingkatan(newSingkatan:Singkatan):Observable<Singkatan>{
      return this.http.put<Singkatan>(
        this.API_SERVER+this.SINGKATAN_ENDPOINT+this.UPDATE_SINGKATAN_ENDPOINT+"/"+newSingkatan.abbreviation,
        newSingkatan
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
