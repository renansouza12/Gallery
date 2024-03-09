import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { ImagesService } from '../../../servives/images.service';
import { Photo } from '../../../models/photos.model';
import { CommonModule } from '@angular/common';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{

  photosList:Photo[] = [];

  constructor(private imageService: ImagesService){}
  
  ngOnInit(): void {
    this.getPhotosList();
    this.imagesAnimation();
  }

  getPhotosList(){
    this.imageService.getPhotos().subscribe(photos => this.photosList = photos.map(photo => photo.urls.regular))
  }

  private imagesAnimation():void{

    gsap.from('.card', {
      stagger:1,
      opacity:0,
      y:100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.gallery',
        scrub: 1,
        start:"top center",
        end: 'center center',
        markers:true
      },
    });
  }
}
