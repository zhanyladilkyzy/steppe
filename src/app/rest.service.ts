import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./objects/post";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/posts";

  getPosts(){
    return this.http.get<Post[]>(this.url);
  }
}
