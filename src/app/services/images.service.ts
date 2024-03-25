import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photos.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private apiUrl = 'https://api.unsplash.com';
  private apiKey = environment.apiKey;

  constructor(private httpClient: HttpClient) {}

  getPhotos(pages: number) {
    return this.httpClient.get<Photo[]>(
      `${this.apiUrl}/photos/?client_id=${this.apiKey}&page=${pages}&per_page=21`
    ).pipe(
      catchError(error => {
        console.error('Error fetching photos:', error);
        return throwError(error);
      })
    );
  }
  
  getSearchPhoto(pages: number, value: string) {
    return this.httpClient.get<Photo[]>(
      `${this.apiUrl}/search/photos/?client_id=${this.apiKey}&page=${pages}&per_page=31&query=${value}`
    ).pipe(
      catchError(error => {
        console.error('Error searching photos:', error);
        return throwError(error);
      })
    );
  }
}
