import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './shared/component/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatDialogModule,
    DialogModule,
  ], 
  
  providers: [
    FormsModule
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
