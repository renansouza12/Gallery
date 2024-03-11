import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photos.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.unsplash.com/';

  constructor(private httpClient: HttpClient) { }

  getPhotos(pages:number){
    return this.httpClient.get<Photo[]>(`${this.apiUrl}/photos/?client_id=${this.apiKey}&page=${pages}&per_page=21`);
  }
}
