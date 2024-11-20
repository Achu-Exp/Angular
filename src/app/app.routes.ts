import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { ProdutpageComponent } from './pages/produtpage/produtpage.component';
import { LoginComponent } from './pages/login/login.component';
import { DistrictdetailsComponent } from './pages/districtdetails/districtdetails.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
  {
    path:"", component:HomePageComponent
  },
  {
    path:"about",component:AboutPageComponent
  },
  {
    path:"contact",component:ContactPageComponent
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
  }

];


