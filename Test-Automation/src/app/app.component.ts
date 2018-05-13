import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent {
  title = 'Test Automation';
  webAppURL ='https://dev.assignforce.revaturelabs.com/home';
  testResult:any;
  constructor(private testService: TestService){}

  setWebAppURL(paramURL: string)
  {
    //hardcoded webAppURL for now`1
   // this.testService.setParamURL(this.webAppURL);
  }

  getResult()
  {
<<<<<<< HEAD
     this.testService.getTestResults();
    //this.gettestresult();
    //console.log(this.testResult);
  }

  
  /*
  gettestresult()
  {
    this.testResult = this.testService.httpdata;
    console.log(this.testResult);
}*/
=======
    this.testService.getTestResults().subscribe(data=>{
   this.testResult = data;
   console.log(this.testResult);
   });
  
  }

  
  

>>>>>>> 6645b4f941b4798520834613dfbea0f370d6e3c9

}
