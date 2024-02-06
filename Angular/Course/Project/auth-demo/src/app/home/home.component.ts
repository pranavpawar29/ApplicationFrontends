import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  errorMessage: string = "";
  constructor(public authService: AuthService){}
  str = "";
  bool: boolean = false ;

  // omit_special_char()
  // { 
  //   // this.str = this.str.replace(/[^a-zA-Z0-9 ]/g, "");
  //   let n=""
  //   for(let i=0; i<this.str.length;i++){
  //     let charCode = this.str.charAt(i);
  //     if(this.containsSpecialChars(this.str.charAt(i))){

  //     }
  //     n += charCode;
  //   }
  //   this.str = n;
  // }

  containsSpecialChars(str: any) {
    const allowedPattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]*$/;
    const match = str.match(allowedPattern);
  
    if (match !== null) {
      this.bool = false;
    } else {
      const unexpectedChar = str.match(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]/);
      this.errorMessage = `Unexpected Character found: ${unexpectedChar ? unexpectedChar[0] : 'unknown'}`;
      this.bool = true;
    }
  }

  // containsSpecialChars(str: any) {
  //   const allowedPattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]*$/;
  //   const match = str.match(allowedPattern);
  //   if(match){
  //     this.bool = false;
  //     return false;
  //   }
  //   else{
  //     for(let i=0; i<str.length;i++){
  //       let index = str.charAt(i)
  //       if(!index.match(allowedPattern)){
  //         this.errorMessage = `Unexpected Character found: ${index}`;
  //         this.bool = true;
  //         return true;
  //       }
  //     }
  //     return true;
  //   }
  // }
}
