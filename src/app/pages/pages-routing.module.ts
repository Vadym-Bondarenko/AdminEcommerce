import { MainPageComponent } from './main-page/main-page.component';
import { ProductsComponent } from './main-page/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
  component: MainPageComponent,
  children: [	// { path: 'login',  loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)},
	{ path: '',
	  // component: MainPageComponent, canActivate: [ AuthGuard ],
	  children: [
	  	// { path: '', loadChildren: () => import('./main-page/home/home.module').then(m=>m.HomeModule)},
	  	// { path: 'users', loadChildren: () => import('./main-page/users/users.module').then(m=>m.UsersModule)},
	  	{ path: 'categories', loadChildren: () => import('./main-page/categories/categories.module').then(m=>m.CategoriesModule)},
	  	// { path: 'subcategories', loadChildren: () => import('./main-page/subcategories/subcategories.module').then(m=>m.SubcategoriesModule)},
	  	// { path: 'stores', loadChildren: () => import('./main-page/stores/stores.module').then(m=>m.StoresModule)},
	    { path: 'products', loadChildren: () => import('./main-page/products/products.module').then(m=>m.ProductsModule)},
	  	// { path: 'orders', loadChildren: () => import('./main-page/orders/orders.module').then(m=>m.OrdersModule)},
	  	// { path: 'sales', loadChildren: () => import('./main-page/sales/sales.module').then(m=>m.SalesModule)},
	  	// { path: 'disputes', loadChildren: () => import('./main-page/disputes/disputes.module').then(m=>m.DisputesModule)},
	  	// { path: 'messages', loadChildren: () => import('./main-page/messages/messages.module').then(m=>m.MessagesModule)},
	  	// { path: '**', component: Error404Component}
	]}
]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
