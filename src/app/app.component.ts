import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './components/sections/header/header.component';
import { HomeComponent } from './components/sections/home/home.component';
import { GalleryComponent } from './components/sections/gallery/gallery.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
          NgOptimizedImage,
          HeaderComponent,
          HomeComponent,
          IntroductionComponent,
          GalleryComponent
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gallery';
}
