import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../component/popup/popup.component';


@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {
  products: any;
  product: any;
  no: string;
  name: string;
  price: string;
  qty: string;
  description: string;
  origin: string;

  constructor(
    private popUp: MatDialog
  ) { }

  saveLocalStorage(key: string, value:any) { 
    const existData = this.getLocalStorage(); 
    if ( key === '-1') {
      localStorage['product'] = JSON.stringify(value); 
    }
    if (existData) {
        const index = existData.find(x => x.no === key)
      if ( index && index.no === key) {
        alert('No Number is already exist')
        this.clearNo();
        return; 
      } else {
        localStorage['product'] = JSON.stringify(value); 
        this.openDialog();
      }
    } else {
        localStorage['product'] = JSON.stringify([value]);  
        this.openDialog();
    }
  }

  getLocalStorage() { 
    return JSON.parse(localStorage.getItem('product'));
  }

  getProductList(value: string) { 
    this.product = this.getLocalStorage(); 
    return this.product.find(x => x.no == value);
  }

  updateProductList(key: string, value: any) {
    let  oldData = this.getLocalStorage();
    const data = oldData.find(x => x.no === key)
    const logic  = data.no === value.no && data.name === value.name && data.price === value.price && data.qty === value.qty && data.origin === value.origin && data.description === value.description
    if ( logic ) {
      alert('There is no changes'); 
      return;
    } else {
      const index = oldData.findIndex(x => x.no === value.no);
      oldData[index] = value
      const temp = '-1'
      this.saveLocalStorage(temp, oldData);
      this.openDialog();
    }
  }

  DeleteProduct (key: string) {
    let oldData = this.getLocalStorage(); 
    console.log(oldData);
    const index = oldData.findIndex(x => x.no === key)
    console.log(index); 
    let y = oldData.splice(index, 1);
    console.log(y)
    localStorage['product'] = JSON.stringify(oldData); 
    this.reloadCurrentPage();
  }

  openDialog(){
    this.popUp.open(PopupComponent);
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  clearNo() { 
    this.no = ''; 
  }
}
