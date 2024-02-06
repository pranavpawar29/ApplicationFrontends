import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{

  constructor( http: HttpClient) { 
    super("https://jsonplaceholder.typicode.com/posts", http);
   }

  // getPosts() {
  //   return this.http.get(this.url)
  //     .pipe(catchError(this.errorHandler));
  // }

  // createPosts(post: any) {
  //   return this.http.post<any>(this.url, JSON.stringify(post))
  //     .pipe(catchError(this.errorHandler));
  // }

  // updatePosts(post: any) {
  //   return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
  //     .pipe(catchError(this.errorHandler));
  // }

  // deletePosts(id: any) {
  //   return this.http.delete(this.url + '/' + id)
  //     .pipe(catchError(this.errorHandler));
  // }

  // deletePost(id: any) {
  //   return this.http.get(this.url + '/' + id)
  //     .pipe(catchError(this.errorHandler));
  // }


  // private errorHandler(error: Response) {
  //   if (error.status === 404)
  //     return throwError(() => new NotFoundErrorClass());
  //   if (error.status === 400)
  //     return throwError(() => new BadRequestErrorClass(error.json()));
  //   return throwError(() => new AppError(error.json()));
  // }

}