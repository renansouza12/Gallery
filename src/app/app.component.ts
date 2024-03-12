import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './components/sections/header/header.component';
import { HomeComponent } from './components/sections/home/home.component';
import { GalleryComponent } from './components/sections/gallery/gallery.component';
import { IntroductionComponent } from './components/sections/introduction/introduction.component';
import { GalleryTitleComponent } from './components/sections/gallery-title/gallery-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
          NgOptimizedImage,
          HeaderComponent,
          HomeComponent,
          IntroductionComponent,
          GalleryTitleComponent,
          GalleryComponent,
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gallery';
}
