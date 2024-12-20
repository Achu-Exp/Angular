export interface  BootstrapCard {
  id:number,
  title:string,
  image:string,
  description:string
}
 export interface BootstrapCarosel {
  id:number,
  image:string
 }
 export interface Products{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
    rate:number,
    count:number
  }
 }
 export interface TodoList{
  id:number,
  todo:string,
  completed:boolean,
  userId:number
}

