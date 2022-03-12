import { Pipe, PipeTransform } from '@angular/core';
// import { en } from './../../../assets/languages/en.json';
const en = require('./../../../assets/languages/en.json');
const es = require('./../../../assets/languages/es.json');
const fr = require('./../../../assets/languages/fr.json');
const pt = require('./../../../assets/languages/pt.json');

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value): string {
    // console.log('Translate Pipe called = ', typeof(value));
    // let locale = localStorage.getItem('locale');
    let val = value.split('.');
    let str = '';
    for(let i = 0; i < val.length; i++) {
      str = str.concat(`'.'${val[i]}`);
    }
    // console.log('str = ', str);
    // console.log('en = ', JSON.parse(JSON.stringify(en)+'.'+str));
    // return locale[value];
    return en['headers']['home'];
  }

}
