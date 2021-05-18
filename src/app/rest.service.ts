import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./objects/post";
import {Content} from "./objects/content";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/posts";
  url1 : string = "http://localhost:3000/contents";
  getPosts(){
    return this.http.get<Post[]>(this.url);
  }
  getContent(){
    return this.http.get<Content[]>(this.url1);
  }

}
