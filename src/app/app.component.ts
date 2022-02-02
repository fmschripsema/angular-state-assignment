import { Component, OnInit } from '@angular/core';
import { PostService } from '@data-access/services/post/post.service';
import { tap } from 'rxjs/operators';
import { Post } from '@data-access/services/post/post.types';
import { Observable } from 'rxjs';
import { PostStoreService } from '@store/post-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts$!: Observable<Post[]>

  constructor(private postService: PostService, private postStoreService: PostStoreService) {
  }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts().pipe(tap((posts: Post[]) => this.postStoreService.setPosts(posts)));
  }
}
