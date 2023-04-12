import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { IProduct } from '../../../iproduct';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productApi: ProductsService,public translate:TranslateService) {}
  prdList: IProduct[] = [];
  ngOnInit() {
    this.productApi.GetAllProducts().subscribe((data) => {
      this.prdList = data;
    });
    
  }
}
