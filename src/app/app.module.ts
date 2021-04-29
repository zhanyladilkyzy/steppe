import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomepageModule } from './homepage/homepage.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { HomepageComponent } from './homepage/homepage.component';
// import { BigbannerComponent } from './homepage/bigbanner/bigbanner.component';
// import { SmallbannerComponent } from './homepage/smallbanner/smallbanner.component';
import { NavpageComponent } from './navpage/navpage.component';
import { ErrorComponent } from './error/error.component';
import { ArticleComponent } from './article/article.component';
import { PostNotFoundComponent } from './post-not-found.component'

import { PostService } from './services/post.service';
import { LoggingService } from './services/logging.service';
import { ArticleCanDeactivateGuardService } from './services/article-can-deactivate-guard.service';
import { PostDetailsGuardService } from "./services/post-details-guard.service";
import { ReadArticleComponent } from './read-article/read-article.component';
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavpageComponent,
    ErrorComponent,
    ArticleComponent,
    PostNotFoundComponent,
    ReadArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PostService, LoggingService, ArticleCanDeactivateGuardService,
              PostNotFoundComponent, PostDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
