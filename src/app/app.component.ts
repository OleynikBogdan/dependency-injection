import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router:Router){}



  goToFirst(): void{
    this.router.navigate(['first']);
  }
  goToSecond(): void{
    this.router.navigate(['second']);
  }
  goToThird(): void{
    this.router.navigate(['third']);
  }
  goToFourth(): void{
    this.router.navigate(['fourth']);
  }
  goToFifth(): void{
    this.router.navigate(['fifth']);
  }
  goToSixth(): void{
    this.router.navigate(['sixth']);
  }

}
