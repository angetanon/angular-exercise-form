import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import * as  firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  posts: any[];
  constructor() {
    const config = {
      apiKey: "AIzaSyBs0__7LK3IrRbkrPnL2QLBGJhWrL3haWo",
      authDomain: "post-anglar-ange.firebaseapp.com",
      databaseURL: "https://post-anglar-ange.firebaseio.com",
      projectId: "post-anglar-ange",
      storageBucket: "",
      messagingSenderId: "858068760848"
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {

  }
}
