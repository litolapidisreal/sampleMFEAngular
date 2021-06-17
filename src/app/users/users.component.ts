import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  token: string = "";
  switchValue: number = 0;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.castJWT.subscribe((val: any) => {
      this.token = val;
    });
  }

  getUsers() {
    this.service.getUsers("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjIzNzc2MzM1LCJpYXQiOjE2MjM3NDAzMzV9._SVGxDAGOf3REaYyj7mY1uRWDTTj_qdrpxFddNTZcTo")
    .subscribe(val => console.log(val));
  }

}
