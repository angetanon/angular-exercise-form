import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  //@Output() loveIts = new EventEmitter<number>();
  loveIt = 0;
  dontLoveIt = 0;
  loveIts: number;
  upDate = new Date();


  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIt += 1;
    // this.loveIts.emit(this.loveIt);
  }
  onDontLoveIt() {
    this.dontLoveIt -= 1;
    /// this.loveIts.emit(this.dontLoveIt);
  }

  getColor() {
    this.loveIts = this.loveIt + this.dontLoveIt;
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    } else if (this.loveIts === 0) {
      return 'black'
    }
  }

  getBackGround() {
    this.loveIts = this.loveIt + this.dontLoveIt;
    if (this.loveIts > 0) {
      return 'list-group-item-success';
    } else if (this.loveIts < 0) {
      return 'list-group-item-danger';
    } else if (this.loveIts === 0) {
      return 'list-group-item'
    }
  }

}
