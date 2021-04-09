import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavpageComponent } from './navpage/navpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCanDeactivateGuardService } from './services/article-can-deactivate-guard.service'
import {PostNotFoundComponent} from "./post-not-found.component";
import {PostDetailsGuardService} from "./services/post-details-guard.service";
import {PreferencesCheckGuard} from "./services/preferences-check.guard";


const routes: Routes = [{path: 'navpage', component: NavpageComponent},
                        {path:'homepage', component: HomepageComponent, canActivate: [PostDetailsGuardService]},
                        {path:'article', component: ArticleComponent, canDeactivate: [ArticleCanDeactivateGuardService]},
                        {path: 'notfound', component: PostNotFoundComponent},
                        {path:'', redirectTo:'homepage',pathMatch:'full'},
                        { path: 'preferences',
                          canLoad: [PreferencesCheckGuard],
                          loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) },
                        {path: '**', component: ErrorComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
