import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveIts: number;
  @Input() index: number;
  @Input() updateDate: Date;
  posts: Post[];
  postSubscription: Subscription;



  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  onLoveIt() {
    this.loveIts += 1;
    this.posts[this.index].loveIts = this.loveIts;
    this.posts[this.index].updateDate = new Date();
    this.postService.savePosts();
  }

  onDontLoveIt() {
    this.loveIts -= 1;
    this.posts[this.index].loveIts = this.loveIts;
    this.posts[this.index].updateDate = new Date();
    this.postService.savePosts();
  }

  onRemove() {
    this.postService.removePost(this.index);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }



}
