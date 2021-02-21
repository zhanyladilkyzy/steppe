export class Post {
  public title: string;
  public text: string;
  public date: string;
  public author: string;
  public post: Post[] = [];


  constructor(title: string, text: string, date: string, author: string) {
    this.title = title;
    this.text = text;
    this.date = date;
    this.author = author;
    this.post = [];
  }
}
