import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  
  constructor(private http: HttpClient){}

  ngOnInit() {
      this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe( 
        x => console.log(x),
        x => console.error('%c no data came in', 'font-size: 20px; color: white; background: tomato'  )
      );    
  }

}