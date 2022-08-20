import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
imageSrc: string;
imageAlt: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

 @Input() images: carouselImage[] = []
 @Input() indicators = true;
 @Input() autoSlide = true;
 @Input() controls = true;
 @Input() sledeInterval = 3000;

 selectedIndex: number = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void{
  setInterval(()=>{
   this.onNextClick();
    }, this.sledeInterval)
    }

//nastavenie indexu obrazku na dot/indicator klik
  selectedImages(index: number): void{
this.selectedIndex = index;
  }
onNextClick(): void{
if(this.selectedIndex === this.images.length -1){
  this.selectedIndex = 0;
} else{
  this.selectedIndex++
}


}




}

