import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AddTableComponent } from './add-table/add-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'menu', component: MenuComponent},
  {path:'add-table',component:AddTableComponent},
  {path:'list-table',component:ListTableComponent},
  {path:'home',component:HomeComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
