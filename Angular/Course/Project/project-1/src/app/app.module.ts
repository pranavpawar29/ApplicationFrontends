import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArchiveOneComponent } from './archive-one/archive-one.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ButtonEleComponent } from './button-ele/button-ele.component';
import { InputComponent } from './input/input.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArchiveOneComponent,
    NotFoundComponent,
    ButtonEleComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'archive/:year/:month', component: ArchiveOneComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
