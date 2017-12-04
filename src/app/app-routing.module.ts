import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ArticleSummaryComponent } from './main/article-summary/article-summary.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'summary/:id', component: ArticleSummaryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true },
    ),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
