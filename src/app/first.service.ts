import { Injectable } from '@angular/core';
// {
//   providedIn: 'root'
// }

@Injectable()
export class FirstService {

  num: number = 0;
  constructor() { }

  increment(): void{
    this.num++;
  }

  getNum(): number{
    return this.num;
  }
  
}
