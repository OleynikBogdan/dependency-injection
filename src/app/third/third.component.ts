import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
  providers: [FirstService]
})
export class ThirdComponent {

  num = this.service.getNum();
  constructor (private service: FirstService){}

  increment(): void{
    this.service.increment();
    this.num = this.service.getNum();
  }
}
