import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount') totalLikes = 0;
  @Input('isActive') hasLiked = false;

  onCLick(){
    this.totalLikes += (this.hasLiked)? -1 : +1;
    this.hasLiked = !this.hasLiked;
  }
}
