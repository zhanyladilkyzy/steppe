import { Injectable } from '@angular/core';
import { Post } from '../objects/post';
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public loggingService: LoggingService) { }

  getPosts() {
    let postList: Post[];
    postList=[
      new Post(1,'Text text 1', 'texttest tefdfsfj','10-20-2020' , 'author name'),
      new Post(2, 'Text text 2', 'texttest tefdfsfj','10-20-2020' , 'author name'),
      new Post(3, 'Text text 3', 'texttest tefdfsfj','10-20-2020' , 'author name'),
      new Post(4,'Text text 4', 'texttest tefdfsfj', '10-20-2020', 'author name'),
      new Post(5,'Text text 5', 'texttest tefdfsfj', '10-20-2020', 'author name'),
      new Post(6,'Text text 6', 'texttest tefdfsfj', '10-20-2020', 'author name'),
      new Post(7,'Text text 7', 'texttest tefdfsfj', '10-20-2020', 'author name'),
      new Post(8,'Text text 8', 'texttest tefdfsfj', '10-20-2020', 'author name'),
      new Post(9,'Text text 9', 'texttest tefdfsfj', '10-20-2020', 'author name')
    ];

    this.loggingService.log('getPosts is touched!' + postList);

    return postList;
  }
  getPost(postId: number) {
    let posts = this.getPosts();
    for(let i = 0; i < posts.length; i++){
      if(posts[i].id == postId){
        return posts[i];
      }
    }

    this.loggingService.log('getPost is touched!');
    return 'Get Post is touched!!!';
  }
}
