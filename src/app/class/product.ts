export class Product {
    ProductId: number=0;
    name: string='';
    description: string='';
    price: number=0;
    imageName: string='';
  
  constructor(productid:number, name: string, description: string, price: number, imageName: string) {
    this.ProductId = productid;
    this.name = name;
    this.description= description;
    this.price = price;
    this.imageName = imageName;
  }
}
