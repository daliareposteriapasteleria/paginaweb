import { Component, Input } from '@angular/core';
import { Cake } from '../../interfaces/cake.interface';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input()
  public item!:Cake;



  
}
