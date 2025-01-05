import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catlog';
  selectedOption:string='product';
  productsData=[
    {
      pname:"Samsung",
      pdescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim ullam voluptates qui ea. Beatae, quos! Fuga fugiat voluptatibus, totam odit voluptatum dicta, temporibus earum unde facilis, fugit quibusdam atque.`,
      pcatg:"catlog"
    },
    {
      pname:"Iphone",
      pdescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim ullam voluptates qui ea. Beatae, quos! Fuga fugiat voluptatibus, totam odit voluptatum dicta, temporibus earum unde facilis, fugit quibusdam atque.`,
      pcatg:"product"
    }
  ]

 addproduct(){
  const newproducts={
    pname:`Iphone`,
    pdescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim ullam voluptates qui ea. Beatae, quos! Fuga fugiat voluptatibus, totam odit voluptatum dicta, temporibus earum unde facilis, fugit quibusdam atque.`,
    pcatg:`product`

  }
   

  this.productsData.push(newproducts);
 }
 addcatlog(){
  const newcatlog={
    pname:`Samsung`,
    pdescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim ullam voluptates qui ea. Beatae, quos! Fuga fugiat voluptatibus, totam odit voluptatum dicta, temporibus earum unde facilis, fugit quibusdam atque.`,
    pcatg:`catlog`
  }
  this.productsData.push(newcatlog);
 }
}
