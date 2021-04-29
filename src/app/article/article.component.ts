import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";
import {Post} from "../objects/post";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  title  = 'JSONServerApi';
  constructor(private rs: RestService) { }

  columns  = ["Post ID", "Title", "Text", "Date", "Author"];

 // index = ["id", "title", "text", "date", "author"];
  index = [1,2,3,4,5]
  posts: Post[] = [];

  ngOnInit(): void {
    this.rs.getPosts().subscribe
    (
      (response)=>
      {
        this.posts = response;
      },
      (error)=>
      {
        console.log("ERROR: " + error);
      }
    )
  }

}
