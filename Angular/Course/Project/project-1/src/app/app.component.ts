import { Component } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
const dataTemp = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Alice' }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  form = new FormControl({
    
  });

  // title = 'project-1';
  // nm = 0;
  // bool = false;
  // name = "none"
  // btnName = "click"
  // numberStr = "text";
  // defaultInput=""
  // handleClick(event: any){this.nm = event}
  // change(val: any){
  //   this.defaultInput = val;
  // }


  // data = dataTemp;
  // delIp: string = "";

  // onDelete(event : any) {
  //   this.data = this.data.filter(val => event !== val.name);
  //   this.data.forEach(val => console.log(val))
  //   this.delIp = ""
  // }
}
