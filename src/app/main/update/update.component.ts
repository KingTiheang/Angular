import { Component, OnInit, ViewChild, AfterViewInit, DoCheck } from '@angular/core';
import { BackService } from 'src/app/shared/services/back.service';
import { LocalServiceService } from 'src/app/shared/services/local-service.service';
import { DataCenter } from 'src/app/shared/utils/data-center.static';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/component/popup/popup.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, AfterViewInit{
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  origin: string;
  name: string;
  no: string;
  description: string;
  price: string;
  qty: string;
  product: any;
  products: any; 
  dataSource: any;

  constructor(
    private backService: BackService,
    private localService: LocalServiceService,
    private popUp: MatDialog,
    private liveAnnouncer: LiveAnnouncer,
  ) { }

  ngOnInit() { 
    this.products = this.localService.getLocalStorage();
    this.dataSource = new MatTableDataSource(this.products);
    this.bind();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['no', 'name', 'price', 'qty', 'origin', 'description']

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce('Sorted $(sortState.direction)ending');
    } else {
        this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  back() { 
    this.backService.back();
  }

  bind() {
    const product = DataCenter.get('homepage', 'homepage', false); 
    this.no = product.no;
    this.name = product.name;
    this.price = product.price;
    this.qty = product.qty;
    this.origin = product.origin;
    this.description = product.description; 
  }

  bindData(value: any) {
    this.product = this.localService.getProductList(value);
      this.no           = this.product.no; 
      this.name         = this.product.name;
      this.price        = this.product.price;
      this.qty          = this.product.qty;
      this.origin       = this.product.origin;
      this.description  = this.product.description;
  }

  update() { 
    const data = {
      no:           this.no,
      name:         this.name,
      price:        this.price,
      qty:          this.qty,
      origin:       this.origin,
      description:  this.description
    }
    this.localService.updateProductList(data.no, data);
    this.clear();
    console.log('updated', this.products)
    this.reloadPage();
  } 

  clear(){ 
    this.no           = '';
    this.name         = '';
    this.price        = ''; 
    this.qty          = '';
    this.origin       = ''; 
    this.description  = ''; 
  }

  reloadPage(){
    window.location.reload();
  }

  openDialog() { 
    this.popUp.open(PopupComponent);
  }
}
