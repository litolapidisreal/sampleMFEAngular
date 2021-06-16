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
  user: string;
  password: string;

  constructor(private router: Router,
    private service: DataService) { }

  ngOnInit(): void {
  }

  clickMe() {
    this.service.login(this.user, this.password)
    .subscribe((data: any) => {
      if (!data) return false;

      this.service.setJwt(data.jwt);
      this.router.navigate(['users']);
    });
  }

}

