import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageModuleComponent } from './homepage-module.component';
import {ReadArticleComponent} from "../read-article/read-article.component";
import {ArticleComponent} from "../article/article.component";


const routes: Routes = [
  {path:'/readarticle', component: ReadArticleComponent },
  {path:'/article', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
