import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
// import 'lit-project';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: any;
  datas: any;
  // @ViewChild('test') ref: ElementRef<HTMLMyComponentElement>;

  constructor(private service: DataService,
              private render: Renderer2) { }

  async onTest() {
    if (this.datas) {
      console.log("already called");
      return;
    }

    // this.datas = await this.ref.nativeElement.fetchData();
    // console.log(this.datas);

  }

  handler() {
  }

  refresh() {
    window.location.reload();
  }

  clickHandler(e: CustomEvent) {
    // console.log(e.detail);
    this.datas = e.detail;
  }

  getEmittedValue(e) {
    this.datas = e.detail;
    console.log("value from NG: ", e.detail)
  }

  ngOnInit() {
    //this.service.getData().subscribe(data => this.users = data);
  }
}
