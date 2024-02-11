import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstService } from '../first.service';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: '',
    component: SecondComponent
  },
  {
    path: '',
    component: ThirdComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[FirstService]
  
})
export class FirstGroupModule { }
