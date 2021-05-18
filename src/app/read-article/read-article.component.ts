import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";
import {Post} from "../objects/post";
import {Content} from "../objects/content";

@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.scss']
})
export class ReadArticleComponent implements OnInit {

  title  = 'JSONServerApi';
  constructor(private rs: RestService) { }
  contents : Content[] = [];

  ngOnInit(): void {
    this.rs.getContent().subscribe
    (
      (response)=>
      {
        this.contents = response;
      },
      (error)=>
      {
        console.log("ERROR: " + error);
      }
    )
  }

}
