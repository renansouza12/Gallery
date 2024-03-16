import { NgOptimizedImage } from '@angular/common';
import { Component,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  @Output() backBtn = new EventEmitter<string>();

  back():void{
    this.backBtn.emit();
  }

}
