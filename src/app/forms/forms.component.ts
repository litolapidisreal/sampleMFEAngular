import { Component, OnInit } from '@angular/core';
import { DataService, Users } from '../data.service';
import { take, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  token: string = "";
  isValid: boolean = false;
  switchValue: number = 0;
  users$: Observable<Users[]>;

  showSwitch: boolean;
  showFundButton: boolean = true;

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
  //   this.service.getUsers("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjI0MjYyMTEzLCJpYXQiOjE2MjQyNjE4MTN9.3NplvbKB01uMhkwfJXXbi13IouBwKgCqaAbwBNWz-Gk")
  //   .subscribe(val => { return val; });
  // }


  getEmittedData(e: any) {
    console.log("proceed: ", e.detail);
    this.showSwitch = e.detail;
  }

  getTokenEmit(e: any) {
    this.token = e.detail;
    // this.showFundButton = e.detail;
  }

  getMFEToken() {
    this.service.requestToken('username', 'password')
      .pipe(take(1))
      .subscribe((data: any) => {
        if (!data) {
          return false;
        }

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
          console.log("success", this.token);
        }
      },
      err => {
        console.log("ERROR: ", err.error)
      });
  }

}

