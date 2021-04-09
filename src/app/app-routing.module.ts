import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavpageComponent } from './navpage/navpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCanDeactivateGuardService } from './services/article-can-deactivate-guard.service'


const routes: Routes = [{path: 'navpage', component: NavpageComponent},
                        {path:'homepage', component: HomepageComponent},
                        {path:'article', component: ArticleComponent, canDeactivate: [ArticleCanDeactivateGuardService]},
                        {path:'', redirectTo:'homepage',pathMatch:'full'},
                        {path: '**', component: ErrorComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
