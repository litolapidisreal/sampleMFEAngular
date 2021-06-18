import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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
    this.validate();
  }

  // getUsers() {
  //   this.service.getUsers("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjIzNzc2MzM1LCJpYXQiOjE2MjM3NDAzMzV9._SVGxDAGOf3REaYyj7mY1uRWDTTj_qdrpxFddNTZcTo")
  //   .subscribe(val => console.log(val));
  // }


  validate() {
    const jwt = sessionStorage.getItem("jwt")
    this.service.validateToken(jwt)
    .subscribe(
      data => {
        if (data.status === "200") {
          this.token = jwt;
          console.log("success");
        }
      },
      err => {
        console.log("ERROR: ", err.error)
      });
  }

}
