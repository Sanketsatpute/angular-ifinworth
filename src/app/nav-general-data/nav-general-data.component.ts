import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Observable, Observer } from 'rxjs';


export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-nav-general-data',
  templateUrl: './nav-general-data.component.html',
  styleUrls: ['./nav-general-data.component.css'],
})
export class NavGeneralDataComponent implements OnInit {
  asyncTabs: any;

  constructor() {
    type NewType = ExampleTab;

    this.asyncTabs = new Observable((observer: Observer<NewType[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
   }

  ngOnInit(): void {
  }

}
