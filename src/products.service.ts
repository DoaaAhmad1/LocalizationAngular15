import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  
  productsFromApi: IProduct[] = [];
  constructor() {
    this.productsFromApi = [
      {
        id: 1,
        Name: {
          en: 'Iphone',
          ar: 'ايفون',
        },
        quantity: 5,
        price: 2200,
        categoryID: 1,
        discount: 0.25,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCcvXPBEVKmWQVcczqPqjFIYMiuD0RI3HcJa2bq-j3A&s',
      },
      {
        id: 2,
        Name: {
          en: ' Samsung',
          ar: 'سامسونج',
        },
        quantity: 1,
        price: 2000,
        categoryID: 2,
        discount: 0,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbtypOQn3kxao-0u9NPXUoKZQMiJgE9rzXlUa3jmcE5wYJOQ9TINnZoWaCHpGgYcMzMhRhCraMtQ&usqp=CAc',
      },
      {
        Name: {
          en: ' Clothes',
          ar: 'ملابس',
        },
        price: 500,
        discount: 25,
        quantity: 30,
        categoryID: 2,
        id: 4,
      },
      {
        categoryID: 1,
        Name: {
          en: 'shoes',
          ar: 'احذية',
        },
        price: 200,
        discount:25,
        quantity: 300,
        id: 5,
      },
    ];
   
  }

  GetAllProducts(): Observable<IProduct[]> {
    // assume this is from api via http request
    return of<IProduct[]>(this.productsFromApi);
  }
}
