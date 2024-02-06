import { HttpClient, HttpHeaders, HttpHandler, HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.1dm4jAzSnmfPFNKXAz36Iq6I1upjQ3jW1kTfv5cx2XA';
    //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6ZmFsc2V9.DLTdOwxPMgCsXA9p2WDJvwimoQvL2Q6Yyn_sm6B4KRE';

    return of(null).pipe(mergeMap(() => {
      if (req.url.endsWith('/api/authenticate') && req.method === 'POST') {
        let body = JSON.parse(req.body);
        if (body.email === 'mosh@domain.com' && body.password === 'qwer') {
          const responseOptions = {
            status: 200,
            body: { token: token }
          }
          return of(new HttpResponse(responseOptions));
        }
        else {
          const responseOptions = { status: 401 };
          return of(new HttpResponse(responseOptions));
        }
      }
      if (req.url.endsWith('/api/orders') && req.method === 'GET') {
        if (req.headers.get('Authorization') === 'Bearer ' + token) {
          const responseOptions = {
            status: 200,
            body: [1, 2, 3]
          };
          return of(new HttpResponse(responseOptions));
        }
        else {
          const responseOptions = { status: 401 };
          return of(new HttpResponse(responseOptions));
        }
      }
      return next.handle(req);
    }));
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};


// import { HttpClient, HttpResponse, HttpHeaders, HttpHandler } from "@angular/common/http";
// import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable, mergeMap, of } from 'rxjs';



// export function fakeBackendFactory(backend: HttpTestingController, options?: HttpHeaders) {
//   let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

//   backend.match((req) => {
//     setTimeout(() => {
//       if (req.url.endsWith('/api/authenticate') && req.method === 'POST') {
//         let body = JSON.parse(req.body);
//         if (body.email === 'mosh@domain.com' && body.response === '1234') {
//           const responseOptions = {
//             status: 200,
//             body: { token: token }
//           }
//           req.body.flush(responseOptions);
//           return true
//         }
//         else {
//           const responseOptions = { status: 200 };
//           req.body.flush(responseOptions);
//           return false;
//         }
//       }
//         if(req.url.endsWith('/api/authenticate') && req.method === 'GET'){
//           if(req.headers.get('Authorization') === 'Bearer'+token){
//             const responseOptions = {
//               status: 200,
//               body: [1,2,3]
//             };
//             req.body.flush(responseOptions);
//             return true;
//           }
//           else{
//             const responseOptions = {status: 200};
//             req.body.flush(responseOptions);
//           }
//         }
//       return false;
//     }, 1000)
//     return false;
//   });
//   return new HttpClient(backend as unknown as HttpHandler)
// }




// export let fakeBackendProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: fakeBackendFactory,
//   multi: true
// };
