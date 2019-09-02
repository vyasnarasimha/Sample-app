import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IDepartment } from './department';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  public depturl = './assets/data/departments.json';
  
  constructor(private http: HttpClient) { }
 getDepartments () : Observable<IDepartment[]> {
   return this.http.get<IDepartment[]>(this.depturl)
                  .pipe(catchError(this.errorHandler));

 }
 errorHandler(error: HttpErrorResponse ) {
    return throwError(error.message || "Server Error");
 }

}
