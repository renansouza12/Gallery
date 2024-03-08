import { Component, OnInit } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss','./introduction.responsive.component.scss']
})
export class IntroductionComponent implements OnInit {
  ngOnInit(): void {
    this.introductionAnimation();
  }
  

  private introductionAnimation():void{
    gsap.from('#intro_title',{
      y:100,
      opacity:0,
      scrollTrigger:{
        trigger:".introduction",
        start:"top center",
        end:"bottom center",
        scrub:1,
      }
    })


    
    const myIntroductionTile = new SplitType('#intro_p');
    const charIntro = document.querySelectorAll('#intro_p .char');

    gsap.from(charIntro,{
      opacity:0,
      x:30,
      stagger:.1,
      ease:"bounce.inOut",
      scrollTrigger:{
        trigger:".introduction",
        start:"-20% center",
        end:"top center",
        scrub:1,
      }
    })
  }
}
