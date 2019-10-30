import { Component } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  observable = fromEvent(window, 'mousemove');

}