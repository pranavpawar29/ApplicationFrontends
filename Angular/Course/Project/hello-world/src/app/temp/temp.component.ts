import { Component, OnInit } from '@angular/core';
import { Data, TempService } from '../temp.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit{
  array : Data[] = []
  constructor( public tempService : TempService) {}

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.tempService.get().subscribe(
      data => {
        console.log(data)
        this.array = data}
    )
  }

}
