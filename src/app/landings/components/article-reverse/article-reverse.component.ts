import { Component, Input } from '@angular/core';
import { Cake } from '../../interfaces/cake.interface';

@Component({
  selector: 'article-reverse',
  templateUrl: './article-reverse.component.html',
  styleUrls: ['./article-reverse.component.css']
})
export class ArticleReverseComponent {

  @Input()
  public item!:Cake;
}
