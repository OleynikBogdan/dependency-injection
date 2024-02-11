import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.scss'
})
export class FourthComponent {

  num = this.service.getNum();
  constructor (private service: FirstService){}

  increment(): void{
    this.service.increment();
    this.num = this.service.getNum();
  }
}
