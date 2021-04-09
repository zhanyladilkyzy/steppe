export class Post {
  public id: number;
  public title: string;
  public text: string;
  public date: string;
  public author: string;

  constructor(id: number,title: string, text: string, date: string, author: string) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.date = date;
    this.author = author;
  }
}
