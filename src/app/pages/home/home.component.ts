import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Product } from "../../app.models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides = [
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'https://cdn.southwestmedical.com/image-bg/wheel-builder-bk.png?w=700&h=240&fit=crop' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'https://cdn.southwestmedical.com/image-bg/qw-water.jpg?w=700&h=240&fit=crop' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'https://cdn.southwestmedical.com/image-bg/Quickie-Wheelchair-Parts.png?w=700&h=240&fit=crop' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'https://cdn.southwestmedical.com/image-bg/qw-wheels.png?w=700&h=240&fit=crop' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'https://cdn.southwestmedical.com/image-bg/qw-offroad.jpg?w=700&h=240&fit=crop' }
  ];

  public brands = [];
  public banners = [];
  public featuredProducts: Array<Product>;
  public onSaleProducts: Array<Product>;
  public topRatedProducts: Array<Product>;
  public newArrivalsProducts: Array<Product>;


  constructor(public appService:AppService) { }

  ngOnInit() {
    this.getBanners();
    this.getProducts("featured");
    this.getBrands();
  }

  public onLinkClick(e){
    this.getProducts(e.tab.textLabel.toLowerCase()); 
  }

  public getProducts(type){
    if(type == "featured" && !this.featuredProducts){
      this.appService.getProducts("featured").subscribe(data=>{
        this.featuredProducts = data;      
      }) 
    }
    if(type == "on sale" && !this.onSaleProducts){
      this.appService.getProducts("on-sale").subscribe(data=>{
        this.onSaleProducts = data;      
      })
    }
    if(type == "top rated" && !this.topRatedProducts){
      this.appService.getProducts("top-rated").subscribe(data=>{
        this.topRatedProducts = data;      
      })
    }
    if(type == "new arrivals" && !this.newArrivalsProducts){
      this.appService.getProducts("new-arrivals").subscribe(data=>{
        this.newArrivalsProducts = data;      
      })
    }
   
  }

  public getBanners(){
    this.appService.getBanners().subscribe(data=>{
      this.banners = data;
    })
  }

  public getBrands(){
    this.brands = this.appService.getBrands();
  }

}
