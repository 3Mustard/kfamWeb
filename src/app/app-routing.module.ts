import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuItemComponent } from './pages/menu-item/menu-item.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {path:'menu',component:MenuComponent},
  {path: 'menu/:id',component:MenuItemComponent},

  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'faq',component:FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
