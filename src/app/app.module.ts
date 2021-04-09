import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BigbannerComponent } from './homepage/bigbanner/bigbanner.component';
import { SmallbannerComponent } from './homepage/smallbanner/smallbanner.component';
import { NavpageComponent } from './navpage/navpage.component';
import { ErrorComponent } from './error/error.component';
import { ArticleComponent } from './article/article.component';

import { PostService } from './services/post.service';
import { LoggingService } from './services/logging.service';

import { ArticleCanDeactivateGuardService } from './services/article-can-deactivate-guard.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    BigbannerComponent,
    SmallbannerComponent,
    NavpageComponent,
    ErrorComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostService, LoggingService, ArticleCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
