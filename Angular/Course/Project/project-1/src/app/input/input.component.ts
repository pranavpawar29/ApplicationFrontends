import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() inputPlaceHolder: string = "Please Enter value";
  @Input() inputValue: string = "";
  @Input() type: string = "text";
  @Output() valueChanged = new EventEmitter();  
  onInputChange() {
    this.valueChanged.emit(this.inputValue);
  }

}
