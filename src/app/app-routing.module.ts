import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    loadChildren: () => import('./first-group/first-group.module').then(m => m.FirstGroupModule)
  },
  {
    path: 'second',
    component: SecondComponent,
    loadChildren: () => import('./first-group/first-group.module').then(m => m.FirstGroupModule)
  },
  {
    path: 'third',
    component: ThirdComponent,
    loadChildren: () => import('./first-group/first-group.module').then(m => m.FirstGroupModule)
  },
  {
    path: 'fourth',
    component: FourthComponent
  },
  {
    path: 'fifth',
    component: FifthComponent
  },
  {
    path: 'sixth',
    component: SixthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
