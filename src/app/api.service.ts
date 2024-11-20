import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getTodoList(){
    return this.http.get('https://dummyjson.com/todos')
  }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  getCategory(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProductsByCategory(category:string){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
  }
  getProdutsByid(id:any){
    return this,this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

  getPincodeData(pin:any){
    return this.http.get('data/pincodes.json').pipe(
      map((data:any) => {

        const filteredData = data.filter((item:any) => item.pincode === Number( pin));
        return filteredData;
      })
    );
  }
  getDistricts(id:any) {
    return this.http.get('data/district.json').pipe(
      map((data: any) => {

        const filteredData = data.filter((item: any) => item.id === Number(id));
        return filteredData;
      })
    );
  }

}
