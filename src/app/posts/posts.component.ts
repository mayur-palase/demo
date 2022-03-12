import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { API } from '../shared/constants/api.constants';
import { person } from '../shared/constants/utility.constants';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  data: person[];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getData();
    // this.postData();
  }

  getData() {
    // return this.httpService.makeHttpGetRequest( '/api/' + API.USERS ).pipe(response => response);
    this.httpService.makeHttpGetRequest( '/api/' + API.USERS ).subscribe(
      (res) => {
        this.data = res;
        console.log('this.data = ', this.data);
      },

      (error) => {
        console.log(error.error);
      }
    )
  }

  postData() {
    let data = {
      id: 5,
      name: 'Mohini',
      age: 25,
      gender: 'female'
    };
    this.httpService.makeHttpPostRequest( '/api/' + API.ADD_USER, JSON.stringify(data)).subscribe(
      (res) => {
        // console.log('post response = ', res);
      }
    );
  }

}
