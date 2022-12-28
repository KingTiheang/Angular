import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { LocalServiceService } from 'src/app/shared/services/local-service.service';
import { DataCenter } from 'src/app/shared/utils/data-center.static';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort; 
  @ViewChild(MatPaginator) paginator : MatPaginator;
    no: String;
    name: String;
    description: String;
    price: String;
    qty: String;
    origin: String;
    dataSource: any;
    product: any;
    products: any;

  constructor(
    private router: Router,
    private liveAnnouncer: LiveAnnouncer, 
    private localService: LocalServiceService,

  ) { }
  ngOnInit(): void{
    this.products = this.localService.getLocalStorage();
    console.log(this.products)
    this.dataSource = new MatTableDataSource(this.products)
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['no', 'name', 'price', 'qty', 'origin', 'description', 'd']
  
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce('Sorted $(sortState.direction)ending');
    } else {
      this.liveAnnouncer.announce('Sorting cleared')
    }
  }

  update(value: any){
    this.product = this.localService.getProductList(value);
    console.log(this.product);
    const data = {
      no: this.product.no,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      qty: this.product.qty,
      origin: this.product.origin,
    }
    console.log(data);
    DataCenter.set('homepage', 'homepage', data, false); 
    const helloWorld = DataCenter.get('homepage', 'homepage', false);
    console.log('helloWorld', helloWorld);
    this.router.navigate(['/home/update']);
  }

  deleteData(key: string) {
    this.localService.DeleteProduct(key)
  }

  routeURL(strValue: string) {
    let urlRoute = '';
    switch(strValue) {
      case 'detail': 
        urlRoute = '/home/detail';
        break;
      case 'insert': 
        urlRoute = '/home/insert';
        break;
      case 'update':
        urlRoute = '/home/update'; 
        break;
    }
    this.router.navigateByUrl(urlRoute, {replaceUrl: true});
  }
}
