import { Component, OnInit } from '@angular/core';
import { HeaderMenues } from 'src/app/shared/constants/utility.constants';
import { routes } from 'src/app/shared/constants/utility.constants';
// import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navBarItems = [];
  menues;
  constructor() { }

  ngOnInit(): void {
    this.navBarItems = Object.assign([], HeaderMenues);
  }

}
