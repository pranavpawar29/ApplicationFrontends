import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any;
  constructor(
    private route: ActivatedRoute,
    private service: FollowersService) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(
      combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('id');
        return this.service.getAll();
      }
    )).subscribe(followers => this.followers = followers);
  }

}
