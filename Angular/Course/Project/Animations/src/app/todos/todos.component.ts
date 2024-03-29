import { Component } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for Car'
  ];

  addItem(input: HTMLInputElement){
    this.items.splice(0,0,input.value);
    input.value = '';
  }

  removeItem(item: any){
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
