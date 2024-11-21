import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { ProdutpageComponent } from './pages/produtpage/produtpage.component';
import { LoginComponent } from './pages/login/login.component';
import { DistrictdetailsComponent } from './pages/districtdetails/districtdetails.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TimedelayComponent } from './pages/timedelay/timedelay.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path:"", component:HomePageComponent
  },
  {
    path:"shopping",component:ShoppingComponent
  },
  {
    path:"products/:id",component:ProdutpageComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"district/:id",component:DistrictdetailsComponent
  },
  {
    path:"todo",component:TodoComponent
  },
  {
    path:"time",component:TimedelayComponent
  },
  {
    path:"signal",component:SignalsComponent
  },
  {
    path:"cart",component:CartComponent
  }

];


