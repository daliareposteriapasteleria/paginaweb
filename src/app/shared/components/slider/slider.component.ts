import { AfterViewInit, Component, Input } from '@angular/core';
import { Cake } from 'src/app/landings/interfaces/cake.interface';


@Component({
  selector: 'shared-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {



  public elements!: any;
  public currentElement!: number;
  public nextElement!: number;

  @Input()
  public imgs!: Cake;


  ngAfterViewInit(): void {

    this.elements = document.getElementsByClassName(this.imgs.class);
    //find current card
    this.currentElement = 0;

  }

  next(): void {

    //nothing to do when is the last card
    if (this.currentElement == this.elements.length - 1) return

    //define next card
    this.nextElement = this.currentElement + 1;


    //show card selected
    this.elements[this.currentElement].style.opacity = "0";
    this.elements[this.currentElement].style.zIndex = "0";
    this.elements[this.nextElement].style.opacity = "1";
    this.elements[this.nextElement].style.zIndex = "1";

    //difine currenteElement
    this.currentElement = this.nextElement;
  
  }

  previus(): void {

    //nothing to do when is the last card
    if (this.currentElement == 0) return

    //define next card
    this.nextElement = this.currentElement - 1;


    //show card selected
    this.elements[this.currentElement].style.opacity = "0";
    this.elements[this.currentElement].style.zIndex = "0";
    this.elements[this.nextElement].style.opacity = "1";
    this.elements[this.nextElement].style.zIndex = "1";

    //difine currenteElement
    this.currentElement = this.nextElement;

  }

  findCurrentElement(): void {

    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].style.opacity == "1") {
        this.currentElement = i;
        break;
      }

    }
    console.log("current Element: " + this.currentElement)
    console.log("next Element: " + this.nextElement)
  }

}
