import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HeadlineService } from './headline.service';
import { Article } from '../../lib/models/article';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor(private headlineService: HeadlineService) { }

  ngOnInit() {
    this.headlineService.fetch();
  }

  get articles$(): Observable<Article[]> {
    return this.headlineService.articles$;
  }

}
