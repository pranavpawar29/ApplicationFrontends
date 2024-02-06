import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-one',
  templateUrl: './archive-one.component.html',
  styleUrls: ['./archive-one.component.css']
})
export class ArchiveOneComponent implements OnInit{
  year: number | undefined;
  month: number | undefined;
  constructor(private router: Router ,private route: ActivatedRoute){}
  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.year = Number(params.get('year'));
    //this.year = +params.get('year');
    this.month = Number(params.get('month'));

  }

  viewAll(){
    this.router.navigate(['/']);
  }
}
