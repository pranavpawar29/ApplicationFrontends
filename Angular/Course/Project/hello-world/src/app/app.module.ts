import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { EmailService } from './email.service';
import { AuthorsService} from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { TitleCasingPipe } from './title-casing.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { SwitchCaseProgComponent } from './switch-case-prog/switch-case-prog.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyNewCourseFormComponent } from './udemy-new-course-form/udemy-new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasingComponent,
    TitleCasingPipe,
    PanelComponent,
    LikeComponent,
    SwitchCaseProgComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyNewCourseFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    FollowersComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers/:id/:username', component: ProfileComponent},
      {path: 'followers', component: FollowersComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [
    CoursesService,
    EmailService,
    AuthorsService,
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
