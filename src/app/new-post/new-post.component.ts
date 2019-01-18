import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import * as moment from 'moment';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: [''],
      content: [''],
      loveIts: 0,
      updateDate: ''
    });
  }
  onSubmitForm() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const date = moment().toISOString();
    const newPost = new Post(title, content, loveIts, date);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);

  }

}
