import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { BadRequestErrorClass } from '../common/bad-request-error';
import { NotFoundErrorClass } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe({ next: (posts => this.posts = posts)});
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.posts?.splice(0, 0, post);
    
    input.value = '';
    
    this.service.create(post)
      .subscribe({
        next: (newPost => {post['id'] = newPost['id'];}),
        error: ((error: AppError) => {
          this.posts.splice(0,1);

          if (error instanceof BadRequestErrorClass) {
            // this.form.setErrors(error.originalError)
          } else throw error;
        })
      })
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe({next: (updatedPost => {console.log(updatedPost);})});
  }

  deletePost(post: any) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    
    //this.service.deleteGet(121314)
    this.service.delete(post.id)
      .subscribe({
        next: ((delPost) => {}),
        error: ((error: AppError) => {
          this.posts.splice(index, 0, post)

          if (error instanceof NotFoundErrorClass) {
            alert('This Post is already deleted');
          }
          else {
            throw error;
          }
        })
      });
  }

}
