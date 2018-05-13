import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TestService
{
    constructor(private http: Http){}
    private apiURL="/TG_pro/ty.do";
   // private apiURL = "http://ec2-18-188-2-93.us-east-2.compute.amazonaws.com:8090/TG_pro/ty.do";
    private paramURL="https://dev.assignforce.revaturelabs.com/home";
    httpdata: any;

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