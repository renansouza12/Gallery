import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-detail-image',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule],
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.scss','./detail-image.responsive.component.scss']
})
export class DetailImageComponent {
  @Input() detailImage!:string;
  @Input() alt!:string;

  @Input() userImage!:string;
  @Input() userName!:string;

  @Input() likes!:string;

  @Input() date!:string;

  @Input() showImageDetail:string ='enable';


  closeImageDetail():void{
    this.showImageDetail = 'disable';
  }
}
