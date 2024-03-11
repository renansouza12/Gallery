import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { ImagesService } from '../../../services/images.service';
import { Photo } from '../../../models/photos.model';
import { CommonModule } from '@angular/common';

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
    this.loadMore();
  }


  loadMore():void{
    this.page ++;
    this.getPhotosList();
  }

  getPhotosList(){
    this.imageService.getPhotos(this.page).subscribe(photos => this.photosList = this.photosList.concat(photos))
  }
}
