import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { SessionResolverService } from './resolvers/session-resolver.service';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { OperatorsComponent } from './RxJS/operators/operators.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: 'posts',
//     component: PostsComponent,
//     pathMatch: 'full'
//     // resolve: { products: SessionResolverService }
//   },
//   {
//     path: 'about',
//     component: AboutUsComponent,
//     pathMatch: 'full'
//     // resolve: { products: SessionResolverService }
//   },
//   {
//     path: 'product',
//     component: ProductComponent,
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    OperatorsComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CoreModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
