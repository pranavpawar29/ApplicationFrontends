import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inValidLogin: boolean = false;
  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute){}

  signIn(credentials: any) {
    this.authService.login(credentials)
      .pipe(
        tap(result => {
          if (result) {
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            this.router.navigate([returnUrl || '/']);
          } else {
            this.inValidLogin = true;
          }
        }),
        catchError(error => {
          this.inValidLogin = true;
          return of(null);
        })
      )
      .subscribe();
  }
  
  
  
}
