import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input() title = '';
  isExpanded =false;
  expand = 'expand_more';

  toggled(){
    this.expand = (this.isExpanded) ? 'expand_more' : 'expand_less'
    this.isExpanded=!this.isExpanded;
  }

}
