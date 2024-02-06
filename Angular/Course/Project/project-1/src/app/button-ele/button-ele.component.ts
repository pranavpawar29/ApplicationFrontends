import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-ele',
  templateUrl: './button-ele.component.html',
  styleUrls: ['./button-ele.component.css']
})
export class ButtonEleComponent {
  @Input() buttonText : string = 'Click Me!';
  @Output() buttonClick = new EventEmitter<void>();
  
  onCLick() {
    this.buttonClick.emit();
  }
}
