import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent{
  title: string;
  subtitle: string;
  ok: string;
  cancel: string;
  // @Input() title: string;
  // @Input() subtitle: string;
  // @Input() ok: string;
  // @Input() cancel: string;
  constructor( 
    private router: Router,
    private popUp: MatDialog, ) {}      
  yes(){
    this.router.navigate(['/home']);
    this.popUp.closeAll();
  }

  no() { 
    this.popUp.closeAll();
  }
}


