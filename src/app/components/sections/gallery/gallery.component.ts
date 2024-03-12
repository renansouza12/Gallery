import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { ImagesService } from '../../../services/images.service';
import { Photo } from '../../../models/photos.model';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,CardComponent,SearchBarComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{

  photosList:Photo[] = [];
  page:number = 1;
  value!:string;

  constructor(private imageService: ImagesService){}
  
  ngOnInit(): void {
    this.getPhotosList();
  }


  loadMore():void{
    this.page ++;
    this.getPhotosList();
  }

  getPhotosList(){
    this.imageService.getPhotos(this.page).subscribe(photos => this.photosList = this.photosList.concat(photos.map(photo => photo.urls.regular)));
  }
  searchValuePhoto(value:string):void{
    this.value = value;
    this.page = 1;
   
  this.imageService.getSearchPhoto(this.page, this.value).subscribe(photos => {
    
  });
    
  }
}
