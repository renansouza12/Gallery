import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { gsap } from "gsap";



@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent  implements OnInit{
  ngOnInit(): void {
    this.imagesAnimation();
  }

  @Output() backBtn = new EventEmitter<string>();

  back():void{
    this.backBtn.emit();
  }

  private imagesAnimation():void{
  gsap.from('.not_image',{
    opacity:0,
    y:100,
    stagger:.1,
    scrollTrigger:{
      trigger:".not_found",
      start:"top center",
      end:"center center",
      scrub:1,
    }
  })
  }

}
