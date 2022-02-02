import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@data-access/services/post/post.types';
import { PostService } from '@data-access/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
