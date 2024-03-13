import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: [
    './search-bar.component.scss',
    'search-bar.responsive.component.scss',
  ],
})
export class SearchBarComponent {
  labelText!: string;
  value!: string;
  isFocus!: string;

  inputFocus(): void {
    this.isFocus = 'active';
    this.labelText = 'Searching';
  }
  inputBlur(): void {
    this.isFocus = 'disable';
    this.labelText = '';
  }

  @Output() searchBtnValue = new EventEmitter<string>();

  searchBtn(value: string): void {
    this.searchBtnValue.emit(value);
  }

  keyPressed(event: any) {
    this.searchBtn(event.target.value);
  }
}
