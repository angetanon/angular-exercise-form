import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveIts: number;
  upDate = new Date();


  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    return this.loveIts += 1;
  }
  onDontLoveIt() {
    return this.loveIts -= 1;
  }


}
