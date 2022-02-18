import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDataComponent } from './async-pipe/components/my-data.component';

const routes: Routes = [
  {
    path: 'async',
    component: MyDataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
