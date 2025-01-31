import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('string') title: string | undefined;
  isExpanded: boolean | undefined;

  toggle(){
    this.isExpanded = !this.isExpanded;
  }
}
