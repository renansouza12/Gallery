import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imgUrl!:string;

  @Output() seeMoreImage = new EventEmitter<string>();

  seeMore():void{
    this.seeMoreImage.emit();
  }
}
