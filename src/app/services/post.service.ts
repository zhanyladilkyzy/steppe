import { Injectable } from '@angular/core';
import { Post } from '../objects/post';
import { LoggingService } from "./logging.service";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private loggingService: LoggingService) { }
  getPosts() {
        let postList: Post[];
        postList=[
          new Post('Text text 1', 'texttest tefdfsfj','10-20-2020' , 'author name'),
          new Post('Text text 2', 'texttest tefdfsfj','10-20-2020' , 'author name'),
          new Post('Text text 3', 'texttest tefdfsfj','10-20-2020' , 'author name')
        ];

        this.loggingService.log('getPosts is touched!');

        return postList;
    }
}
