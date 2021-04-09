import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {ArticleComponent} from "../article/article.component";

@Injectable({
  providedIn: 'root'
})
export class ArticleCanDeactivateGuardService implements CanDeactivate<ArticleComponent>{

  constructor() { }

  canDeactivate(component: ArticleComponent): boolean {
    return confirm('Are u sure to exit article?');
  }
}
