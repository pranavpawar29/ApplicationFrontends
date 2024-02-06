import { HttpClient} from '@angular/common/http';
import { catchError, throwError, map } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundErrorClass } from '../common/not-found-error';
import { BadRequestErrorClass } from '../common/bad-request-error'

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(map(response => response),
        catchError(this.errorHandler));
  }

  create(resource: any) {
    // return throwError(()=> new AppError());
    return this.http.post<any>(this.url, JSON.stringify(resource))
      .pipe(map(response => response),
      catchError(this.errorHandler));
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(map(response => response),
      catchError(this.errorHandler));
  }

  delete(id: any) {
    //return throwError(()=> new AppError());
    return this.http.delete(this.url + '/' + id)
      .pipe(map(response => response),
      catchError(this.errorHandler));
  }

  deleteGet(id: any) {
    return this.http.get(this.url + '/' + id)
      .pipe(map(response => response),catchError(this.errorHandler));
  }


  private errorHandler(error: Response) {
    if (error.status === 404)
      return throwError(() => new NotFoundErrorClass());
    if (error.status === 400)
      return throwError(() => new BadRequestErrorClass(error.json()));
    return throwError(() => new AppError(error.json()));
  }
}
