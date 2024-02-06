import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    this.route.paramMap
    .subscribe(params=> {
      const id = params.get('id');
      console.log(id);
    })
  }

  submit(){
    this.router.navigate(['/followers'],{
      queryParams: {page: 1, order: 'newest'}
    });
  }
}
