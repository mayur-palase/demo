import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from '../features/about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { routes } from './../shared/constants/utility.constants';

// const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'posts',
  //   component: PostsComponent,
  //   pathMatch: 'full'
  //   // resolve: { products: SessionResolverService }
  // },
  // {
  //   path: 'about',
  //   component: AboutUsComponent,
  //   pathMatch: 'full'
  //   // resolve: { products: SessionResolverService }
  // },
//   {
//     path: 'product',
//     component: ProductComponent,
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
  ],
})
export class CoreModule {}
