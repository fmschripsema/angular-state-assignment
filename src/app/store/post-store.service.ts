import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '@data-access/services/post/post.types';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostStoreService {
  private readonly _posts = new BehaviorSubject<Post[]>([]);

  setPosts(posts: Post[]) {
    this._posts.next(posts);
  }

  getPosts(): Observable<Post[]> {
    return this._posts.asObservable().pipe(shareReplay(1));
  }
}
