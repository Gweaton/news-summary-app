import { Component, Input } from '@angular/core';

import { Article } from '../../../lib/models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input() articles: Article[];

  constructor() { }




}
