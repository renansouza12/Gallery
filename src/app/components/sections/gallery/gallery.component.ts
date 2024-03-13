import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { ImagesService } from '../../../services/images.service';
import { Photo} from '../../../models/photos.model';
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
  photosList: Photo[] = [];
  
  page: number = 1;
  value: string = '';

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.getPhotosList();
  }

  loadMore(): void {
    this.page++;
    if (this.value !== '') {
      this.searchValuePhoto(this.value, true);
    } else {
      this.getPhotosList();
    }
  }

  getPhotosList(): void {
    this.imageService.getPhotos(this.page).subscribe(photos => {
      this.photosList = this.photosList.concat(photos.map(photo => photo.urls.regular));
    });
  }

  searchValuePhoto(value: string,keepSearch: boolean = false): void {
    this.value = value;
    this.imageService.getSearchPhoto(this.page,this.value).subscribe((response:any) => {
       if (!keepSearch) {
        this.photosList = [];
      }
      this.photosList = this.photosList.concat(response.results.map((photo:Photo) => photo.urls.regular)); 
    })
  }
}
