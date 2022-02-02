import { Injectable } from '@angular/core';
import { PostApi } from '../../api/post/post.api';
import { Observable } from 'rxjs';
import { Post } from '../../services/post/post.types';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public constructor(private postApi: PostApi) {}

  getPosts(): Observable<Post[]> {
    return this.postApi.getPosts();
  }
}
