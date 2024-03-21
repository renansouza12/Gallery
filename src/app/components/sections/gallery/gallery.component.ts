import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { ImagesService } from '../../../services/images.service';
import { Photo,Details } from '../../../models/photos.model';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DetailImageComponent } from '../../ui/detail-image/detail-image.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, CardComponent, SearchBarComponent, NotFoundComponent, DetailImageComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss', './gallery.responsive.component.scss']
})
export class GalleryComponent implements OnInit {
  photosList: Photo[] = [];
  photoSelected: Details[] = [];

  page: number = 1;
  value: string = '';

  notFound: boolean = false;
  activeButton: boolean = true;
  constructor(private imageService: ImagesService) { }

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
      this.photosList = this.photosList.concat(photos.map(photo => photo));
    });
  }

  searchValuePhoto(value: string, keepSearch: boolean = false): void {
    this.value = value;

    this.imageService.getSearchPhoto(this.page, this.value).subscribe((response: any) => {
      if (!keepSearch) {
        this.photosList = [];
      }
      if (response.results.length === 0) {
        this.notFound = true;
        this.activeButton = false;
      } else {
        this.activeButton = true;
        this.notFound = false;
        this.photosList = this.photosList.concat(response.results.map((photo: Photo) => photo));
      }

    })
  }

  btnBack(): void {
    this.value = '';
    this.notFound = false;
    this.activeButton = true;
    this.getPhotosList();
  }

  seeMore(id: String): void {

    this.photosList.forEach(photo => {
      if (photo.id === id) {
      this.photoSelected = [];
      this.photoSelected.push(photo);
      console.log(this.photoSelected);
      
      }
    })

  }
}
