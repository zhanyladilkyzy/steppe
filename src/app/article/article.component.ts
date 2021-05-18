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
  images = ['h1.jpeg', 'h2.png', 'h3.jpeg', 'h4.jpeg', 'h5.png', 'h6.png', 'h7.jpeg'];
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


  // getImage(){
  //   let imageSrc = 'assets';
  //   let imageAlt = 'image', images;
  //
  //   for (let img of images){
  //     return imageSrc+'/'+img;
  //   }
  //   return imageSrc+'/'+'logo.svg';
  // }

}
