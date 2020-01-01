import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Micro FE 2';
  constructor(private router: Router) {

  }
  gotoGrid() {
    this.router.navigate(['/grid']);
  }
}
