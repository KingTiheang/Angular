import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/component/popup/popup.component';
import { BackService } from 'src/app/shared/services/back.service';
import { LocalServiceService } from 'src/app/shared/services/local-service.service';



@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  origin: string; 
  name: string;
  no: string;
  description: string; 
  price: string; 
  qty: string; 
  products: any;
  constructor(
    private backService: BackService, 
    private localService: LocalServiceService,
    private popUp: MatDialog,
  ) { }

  ngOnInit(): void {}
  back() {
    this.backService.back();
  }
  
  save() { 
    const data = { 
      no: this.no,
      name: this.name,
      price: this.price, 
      qty: this.qty, 
      origin: this.origin, 
      description: this.description
    }
    this.products = this.localService.getLocalStorage(); 
    console.log(this.products)
    if(this.products) {
      this.products.push(data); 
      this.localService.saveLocalStorage(this.no, this.products);
      this.clear();
    } else {
      this.localService.saveLocalStorage(this.no, data);
    }
  }

  clear() {
    this.no           = '';
    this.name         = '';
    this.price        = ''; 
    this.qty          = ''; 
    this.origin       = '';
    this.description  = '';

  }
}








