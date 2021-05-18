import {Post} from "./post";

export class Content {
  public id: number;
  public fullText: string;
  public post: Post;


  constructor(id: number, fullText: string, post: Post) {
    this.id = post.id;
    this.fullText = fullText;
    this.post = post;
  }
}
