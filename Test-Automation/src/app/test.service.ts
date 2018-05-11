import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TestService
{
    constructor(private http: Http){}
   // private apiURL="http://localhost:8080/TG_pro/ty.do";
    private apiURL = 'https://jsonplaceholder.typicode.com/posts';
   // private apiURL = "http://ec2-18-188-2-93.us-east-2.compute.amazonaws.com:8090/TG_pro/ty.do";
    private paramURL="https://dev.assignforce.revaturelabs.com/home";
    httpdata: any;

 getTestResults()
  {
  return this.http.get(this.apiURL, {params:{"testapp":this.paramURL}})
    .map((response) => response.json())
  }

    getData(data)
    {
    this.httpdata = data;
      return this.httpdata;
    }


}