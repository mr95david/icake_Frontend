import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  constructor() { }

  images = [
    'https://i.ibb.co/nmJKFd8/2.png',
    'https://i.ibb.co/wsBbK4g/3.png',
    'https://i.ibb.co/0r5953D/4.png',
    'https://i.ibb.co/jbJJpKH/5.png',
  ];

  ngOnInit(): void {
  }

}
