import { Component } from '@angular/core';

@Component({
  selector: 'udemy-new-course-form',
  templateUrl: './udemy-new-course-form.component.html',
  styleUrls: ['./udemy-new-course-form.component.css']
})
export class UdemyNewCourseFormComponent {
  courses =[
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ];

  submit(v : any){
    console.log(v);
  }
}
