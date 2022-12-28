import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'update', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
