import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppComponent implements OnInit, AfterViewInit {
  messageToChildComponent: string;
  messageFromChildComponent: string;
  // userActivity;

  // userInactive: Subject<any> = new Subject();
  constructor(private router: Router, private cdref: ChangeDetectorRef) {
    // localStorage.setItem('locale', 'en');
    // console.log(`App component loaded`);
    // this.setTimeout();
    // this.userInactive.subscribe(() => console.log('user has been inactive for 3s'));
  }

  ngOnInit(): void {
    this.router.navigateByUrl('posts');
    this.messageToChildComponent = 'Message from parent component';
  }

  getData(data): void {
    this.messageFromChildComponent = data;
    // console.log(data);
  }

  ngAfterViewInit(): void {
    this.cdref.detectChanges();
    // this.messageFromChildComponent = data;
  }

//   setTimeout() {
//     this.userActivity = setTimeout(() => this.userInactive.next(true), 3000);
//   }

//   @HostListener('window:mousemove')
//   mouseMove() {
//     clearTimeout(this.userActivity);
//     this.setTimeout();
//   }

//   @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
//     clearTimeout(this.userActivity);
//     this.setTimeout();
// }

}
