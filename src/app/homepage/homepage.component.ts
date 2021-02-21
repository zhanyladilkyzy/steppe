import { Component, OnInit } from '@angular/core';
import { Post } from '../objects/post.ts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  bigPost: Post;
//   posts: Post[];

  constructor() { }

  ngOnInit(): void {
    this.bigPost = new Post('Text text', 'texttest tefdfsfj', '10-20-2020', 'author name');
//     this.posts.push(new Post('Text text 1', 'texttest tefdfsfj','10-20-2020' , 'author name'));
//     this.posts.push(new Post('Text text 2', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.posts.push(new Post('Text text 3', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.posts.push(new Post('Text text 4', 'texttest tefdfsfj', '10-20-2020', 'author name'));
  }



}
