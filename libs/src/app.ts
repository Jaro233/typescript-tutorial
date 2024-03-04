import "reflect-metadata";
import {plainToClass} from "class-transformer";
import {Product} from "./product.model";
import {validate} from "class-validator";

const products = [
  {title: "A Carpet", price: 30},
  {title: "A Carpet", price: 29.99},
];

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("validation errors");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("A book", 12.99);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
