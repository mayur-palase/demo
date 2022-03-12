import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionResolverService implements Resolve<any>{

  constructor() { }
  resolve() {
    // console.log(`Resolver called before component get's loaded`);
  }
}
