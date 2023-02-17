import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs';
import { VALUES_FOR_RONI_DEMO } from './consts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  readonly allItems = VALUES_FOR_RONI_DEMO;
  readonly searchControl = new FormControl<string>('');
  readonly userInput$ = this.searchControl.valueChanges.pipe(
    debounceTime(200));

  readonly results$ = this.userInput$.pipe(
    startWith(''),
    map(searchWord => this.allItems.filter(p => p.toLowerCase().includes(searchWord!.toLowerCase()))));

  constructor() { }

  ngOnInit(): void {
  }

  doSearch() {
    alert(this.searchControl.value);
  }

}
