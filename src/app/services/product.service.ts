import { Inject, Injectable } from '@angular/core';
import { Product } from '../class/product';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]=[];

  constructor(@Inject(LoggerService)  private loggerService: any) {

    this.loggerService.log("Product Service Constructor Initialized");
    
  }

  getProductDetails(){
    this.loggerService.log("getProducts called");
    this.products = [
      new Product(1,'HP Spectre x360', 'HP Spectre x360 2-in-1 Laptop OLED Touch 13.5-ef0054TU.', 149999,'laptop.jpg'),
      new Product(2,'iPhone 13 Pro', 'Apple iPhone 13 Pro (256 GB) - Alpine Green', 119900,'mobile.jpg'),
      new Product(3,'SONY Camera', 'SONY ILCE-7M4K/BQIN5 Mirrorless Camera Single Lens: 28-70 mm  (Black)', 230990,'camera.png'),
      new Product(4,'SAMSUNG Crystal 4K', 'SAMSUNG Crystal 4K 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV  (UA55AUE60AKLXL)', 45990,'tv.png'),
     ];
     this.loggerService.log(this.products);
     return this.products;
  }
}
