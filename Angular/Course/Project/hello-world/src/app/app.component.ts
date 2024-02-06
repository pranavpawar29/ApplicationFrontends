import { Component } from '@angular/core';

import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: 'here is the Body of a tweet....',
    isLiked: true,
    likesCount: 10
  }


  // title = 'Angular';
  // post = {
  //   title: "Title",
  //   isFavorite: true
  // }

  // onFavoritetChanged(eventArgs: FavoriteChangedEventArgs){
  //   console.log("Favorite Changed: ", eventArgs);
  // }
}
