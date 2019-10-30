import { Component } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  observable = fromEvent(window, 'mousemove');

  constructor(private http = HttpClient){
    this.observable.subscribe( x => console.log('You moved your mouse') );
  }

}