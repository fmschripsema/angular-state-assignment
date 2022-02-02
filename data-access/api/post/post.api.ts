import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Post } from '../../services/post/post.types';

@Injectable({
  providedIn: 'root'
})
export class PostApi {
  private postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  public constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      errorMessage = `(Client) Error: ${error.error.message}`;
    } else {
      errorMessage = `(Server) Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
