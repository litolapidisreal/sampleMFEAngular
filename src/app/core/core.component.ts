import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  jwt: any = null;
  user: string = 'username';
  password: string = 'password';

  constructor(private router: Router,
    private service: DataService) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  clickMe() {
    this.router.navigate(['forms']);

    // this.service.requestToken(this.user, this.password)
    // .subscribe((data: any) => {
    //   if (!data) return false;

    //   sessionStorage.setItem("jwt", data.jwt);
    //   this.service.setJwt(data.jwt);
    //   this.router.navigate(['forms']);
    // });
  }

}

