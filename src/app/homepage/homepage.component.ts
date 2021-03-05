import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../objects/post';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  bigPost = new Post('Text text BigPost1', 'texttest tefdfsfj','10-20-2020' , 'author name');
  post: Post[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.bigPost = new Post('Text text 1', 'texttest tefdfsfj','10-20-2020' , 'author name');
    this.post.push(new Post('Text text 1', 'texttest tefdfsfj','10-20-2020' , 'author name'));
    this.post.push(new Post('Text text 2', 'texttest tefdfsfj', '10-20-2020', 'author name'));
    this.post.push(new Post('Text text 3', 'texttest tefdfsfj', '10-20-2020', 'author name'));
    this.post.push(new Post('Text text 4', 'texttest tefdfsfj', '10-20-2020', 'author name'));
    this.post.push(new Post('Text text 5', 'texttest tefdfsfj', '10-20-2020', 'author name'));
    this.post.push(new Post('Text text 6', 'texttest tefdfsfj', '10-20-2020', 'author name'));
    this.post.push(new Post('Text text 7', 'texttest tefdfsfj', '10-20-2020', 'author name'));
    this.post.push(new Post('Text text 8', 'texttest tefdfsfj', '10-20-2020', 'author name'));
    this.post.push(new Post('Text text 9', 'texttest tefdfsfj', '10-20-2020', 'author name'));
  }
  getColor() {
        return '#f5f5f2';

    }
  //showSmallBannerItems(post: Post[]):Post[];


}
