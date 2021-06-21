import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  token: string = "";
  isValid: boolean = false;
  switchValue: number = 0;

  constructor(private service: DataService) {

  }

  ngOnInit() {
    // console.log(sessionStorage.getItem("jwt"));
    // this.service.castJWT.subscribe((val: any) => {
    //   this.token = val;
    // });

    // validate token
    // this.validate();
  }

  // getUsers() {
  //   this.service.getUsers("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjIzNzc2MzM1LCJpYXQiOjE2MjM3NDAzMzV9._SVGxDAGOf3REaYyj7mY1uRWDTTj_qdrpxFddNTZcTo")
  //   .subscribe(val => console.log(val));
  // }

  getMFEToken() {
    this.service.requestToken('username', 'password')
    .pipe(take(1))
    .subscribe((data: any) => {
      if (!data) return false;

      this.validate(data.jwt);

    })
  }

  validate(token: any) {
    this.service.validateToken(token)
    .pipe(take(1))
    .subscribe(
      data => {
        if (data.status === "200") {
          this.token = token;
          // console.log("success", this.token);
        }
      },
      err => {
        console.log("ERROR: ", err.error)
      });
  }

}

