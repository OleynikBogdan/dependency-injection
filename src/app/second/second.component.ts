import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  num = this.service.getNum();
  constructor (private service: FirstService){}

  increment(): void{
    this.service.increment();
    this.num = this.service.getNum();
  }
}
