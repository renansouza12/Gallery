import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { ImagesService } from '../../../services/images.service';
import { Photo } from '../../../models/photos.model';
import { CommonModule } from '@angular/common';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{

  photosList:Photo[] = [];
  page:number = 1;


  constructor(private imageService: ImagesService){}
  
  ngOnInit(): void {
    this.getPhotosList();
    this.imagesAnimation();
    this.loadMore();
  }


  loadMore():void{
    this.page ++;
    this.getPhotosList();
  }

  getPhotosList(){
    this.imageService.getPhotos(this.page).subscribe(photos => this.photosList = this.photosList.concat(photos))
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

      },
    });
  }
}
