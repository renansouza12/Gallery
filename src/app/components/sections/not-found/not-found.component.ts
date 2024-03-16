import { NgOptimizedImage } from '@angular/common';
import { Component,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss','./not-found.responsive.component.scss']
})
export class NotFoundComponent {
  @Output() backBtn = new EventEmitter<string>();

  back():void{
    this.backBtn.emit();
  }

}
