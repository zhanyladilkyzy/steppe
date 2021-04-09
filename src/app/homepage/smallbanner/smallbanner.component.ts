import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/objects/post';
import { LoggingService } from "../../services/logging.service";
import { PostService } from "../../services/post.service";


@Component({
  selector: 'app-smallbanner',
  templateUrl: './smallbanner.component.html',
  styleUrls: ['./smallbanner.component.scss']
})
export class SmallbannerComponent implements OnInit {

  // @Input()
  // post: Post[] = [];

  // constructor(private postService: PostService) { }
  // postList: Post[] = [];
  //
ngOnInit(): void {
  //  this.postList = this.postService.getPosts();
}
  //
  //
  // toDate: Date = new Date();

//   @Output()
//   newSmallBannerEvent = new EventEmitter();
//   message: string;
//

  // showSmallBannerItems(post: Post) {
  //     this.newSmallBannerEvent.emit(this.post);
  // }

}
