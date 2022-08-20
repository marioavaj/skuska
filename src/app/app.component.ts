import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//obrazky pre carusel
export class AppComponent {
  title = 'carousel';
  images = [
{
  imageSrc: 'assets/RWKHu9.webp',
  imageAlt: 'banner1'
},
{
  imageSrc: 'assets/RWLAmj.webp',
  imageAlt: 'banner2'
}
  ]
}
