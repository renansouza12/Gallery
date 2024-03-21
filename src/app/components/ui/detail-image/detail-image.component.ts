import { NgOptimizedImage } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-detail-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './detail-image.component.html',
  styleUrl: './detail-image.component.scss'
})
export class DetailImageComponent {
  @Input() detailImage!:string;
  @Input() alt!:string;
}
