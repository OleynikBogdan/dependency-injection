import { Component } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.scss',
  providers: [FirstService]
})
export class SixthComponent {
  num = this.service.getNum();
  constructor (private service: FirstService){}

  increment(): void{
    this.service.increment();
    this.num = this.service.getNum();
  }
}
