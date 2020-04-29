import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { GotyFirestore } from '../interfaces/goty-firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseGotyService {

  private e = environment;
  private apiUrl = `${this.e.cloudFunctionUrl}${this.e.apiVersion}`;
  private listOfGoty: GotyFirestore[] = [];

  constructor(private http: HttpClient) { }

  getListOfGotys(): Observable<GotyFirestore[]> {

    if (this.listOfGoty.length > 0) {
      // With `of` you can return an Observable of anything
      return of(this.listOfGoty);
    } else {
      return this.http.get<GotyFirestore[]>(`${this.apiUrl}${this.e.restRoutes.goty}`)
      .pipe(
        tap(res => this.listOfGoty = res)
      );
    }
  }

  voteForGoty(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.e.restRoutes.goty}/${id}`, {})
      .pipe(
        catchError(resp => {
          console.error(resp.error.message);
          return of(resp);
        })
      );
  }

}
