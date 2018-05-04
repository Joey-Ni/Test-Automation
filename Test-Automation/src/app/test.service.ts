import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService
{
    constructor(private http: Http){}
    private url;
  /*getTestResults method takes url as param, 
  passes it to $http.getmethod and maps response back as json object*/
    getTestResults(url)
    {
      this.http.get(url).
      map(
        (response) => response.json()
      );
    }

    setUrl(url: string)
    {
      this.url=url;
    }

}