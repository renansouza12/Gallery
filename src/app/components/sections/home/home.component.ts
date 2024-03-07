import { Component,OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { gsap } from "gsap";
import SplitType from 'split-type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./home.responsive.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.homeTitleAnimation();
  } 

  private homeTitleAnimation():void{

    const myHomeTitle = new SplitType('#home_title');
    const charHome = document.querySelectorAll('#home_title .char');
    gsap.from(charHome,{
     opacity:0,
     duration:1,
     y:50,
     stagger:.1
    })
  }
  
}
