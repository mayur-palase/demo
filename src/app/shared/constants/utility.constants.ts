import { Routes } from '@angular/router';
import { ProductComponent } from 'src/app/components/product/product.component';
import { HomeComponent } from 'src/app/core/home/home.component';
import { AboutUsComponent } from 'src/app/features/about-us/about-us.component';
import { PostsComponent } from 'src/app/posts/posts.component';

export interface Person {
    id: string;
    name: string;
    age: number;
    gender: string;
}

export const HeaderMenues = [
    { name: 'HOME', path: 'home' },
    { name: 'PRODUCTS', path: 'products' },
    { name: 'ABOUT US', path: 'about' },
    { name: 'CONTACT US', path: 'contact' }
];

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'posts',
      component: PostsComponent,
      pathMatch: 'full'
      // resolve: { products: SessionResolverService }
    },
    {
      path: 'about',
      component: AboutUsComponent,
      pathMatch: 'full'
      // resolve: { products: SessionResolverService }
    },
    {
      path: 'product',
      component: ProductComponent,
      pathMatch: 'full'
    }
  ];
