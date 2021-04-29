import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Post } from '../objects/post';
import {PostService} from "../services/post.service";
// import { LoggingService } from "../../services/logging.service";
// import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage-module.component.html',
  styleUrls: ['./homepage-module.component.scss']
})
export class HomepageModuleComponent implements OnInit {
  postList: Post[];

  constructor(public postService: PostService) {
    this.postList = [];
  }


  ngOnInit(): void {
    this.postList = this.postService.getPosts();
  }




  toDate: Date = new Date();

//   @Output() public childEvent = new EventEmitter();
//
// constructor(public postService: PostService) { }
//   postList: Post[] = [];
//
//   ngOnInit(): void {
//     this.postList = this.postService.getPosts();
//     this.childEvent.emit(this.postList);
//   }
//   bigPost = new Post('Text text BigPost1', 'texttest tefdfsfj','10-20-2020' , 'author name');
//   post: Post[] = [];
//
//
//   ngOnInit(): void {
//     this.bigPost = new Post('Text text 1', 'texttest tefdfsfj','10-20-2020' , 'author name');
//     this.post.push(new Post('Text text 1', 'texttest tefdfsfj','10-20-2020' , 'author name'));
//     this.post.push(new Post('Text text 2', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.post.push(new Post('Text text 3', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.post.push(new Post('Text text 4', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.post.push(new Post('Text text 5', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.post.push(new Post('Text text 6', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.post.push(new Post('Text text 7', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.post.push(new Post('Text text 8', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//     this.post.push(new Post('Text text 9', 'texttest tefdfsfj', '10-20-2020', 'author name'));
//   }
  getColor() {
        return '#f5f5f2';
  }
  //showSmallBannerItems(post: Post[]):Post[];


}
