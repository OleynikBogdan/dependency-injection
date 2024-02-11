import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.scss'
})
export class FifthComponent {
  num = this.service.getNum();
  constructor (private service: FirstService){}

  increment(): void{
    this.service.increment();
    this.num = this.service.getNum();
  }
}
