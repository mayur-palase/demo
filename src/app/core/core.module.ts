import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from '../features/about-us/about-us.component';
import { TranslatePipe } from '../shared/pipes/translate.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    TranslatePipe
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    TranslatePipe
  ],
})
export class CoreModule {}
