import { Component, input,  output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  search = model<string>('');
  searchChange = output<string>();
  searchButtonClicked = output({alias:'submit'});
  SearchClick(){
    this.searchButtonClicked.emit();
  }

}
