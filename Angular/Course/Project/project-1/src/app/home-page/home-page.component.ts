import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  archives = [
    {year: 2023, month: 1},
    {year: 2023, month: 2},
    {year: 2023, month: 3}
  ];

}
