import { Component, OnInit } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-gallery-title',
  standalone: true,
  imports: [],
  templateUrl: './gallery-title.component.html',
  styleUrl: './gallery-title.component.scss'
})
export class GalleryTitleComponent implements OnInit{
  ngOnInit(): void {
      this.tilteAnimation();
  }

  private tilteAnimation(){
    gsap.to('.title',{
      x:300,
      scrollTrigger:{
        trigger:".gallery_title",
        start:"top center",
        end:"bottom center",
        scrub:true,
      }
    })

    gsap.to('.titleArt',{
      x:-300,
      scrollTrigger:{
        trigger:".gallery_title",
        start:"top center",
        end:"bottom center",
        scrub:true,

      }
    })
  }
}
