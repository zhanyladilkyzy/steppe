import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/objects/post';

@Component({
  selector: 'app-smallbanner',
  templateUrl: './smallbanner.component.html',
  styleUrls: ['./smallbanner.component.scss']
})
export class SmallbannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  poster: Post[] = [];
  // @Output() 
  // newSmallBannerEvent = new EventEmitter<Post>();

  // showSmallBannerItems(post: Post) {
  //     this.newSmallBannerEvent.emit(this.post);
  // }

}
