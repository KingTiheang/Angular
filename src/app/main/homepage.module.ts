import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailComponent } from './detail/detail.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomepageComponent,
    InsertComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [
    HomepageComponent,
    DetailComponent,
    InsertComponent,
    UpdateComponent,
  ],
})
export class HomepageModule { }
