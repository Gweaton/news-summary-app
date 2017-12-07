import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ArticleSummaryModalComponent } from './main/article-list/article-summary-modal/article-summary-modal.component';
import { ArticleListComponent } from './main/article-list/article-list.component';
import { ArticleService } from './main/article.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArticleListComponent,
    ArticleSummaryModalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ArticleService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
