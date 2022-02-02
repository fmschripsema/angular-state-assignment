import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostStoreService } from '@store/post-store.service';
import { Post } from '@data-access/services/post/post.types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postStoreService: PostStoreService) { }

  ngOnInit(): void {
    this.posts$ = this.postStoreService.getPosts();
  }
}
