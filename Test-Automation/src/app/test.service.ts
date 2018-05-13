import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/Rx';

@Injectable()
export class TestService
{
    constructor(private http: Http){}
    private apiURL="http://localhost:8080/TG_pro/ty.do";
   // private apiURL = 'https://jsonplaceholder.typicode.com/posts';
    private paramURL="https://dev.assignforce.revaturelabs.com/home";
    httpdata: any;

//    getTestResults()
//    {
//      return this.http.get(this.apiURL)
//      .toPromise()
//      .then(response => response.json())
//    }

  getTestResults()
  {
     this.http.get(this.apiURL)
    .map((response) => response.json()).subscribe(data => {
     this.getData(data);// console.log(data);
     // window.location.replace("/TG_pro/test-output/emailable-report.html");
      window.location.href='/TG_pro/test-output/emailable-report.html';
    });

  }

    getData(data)
    {
    this.httpdata = data;
      return this.httpdata;
    }


}