import { Component } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  observable = fromEvent(window, 'mousemove');

  constructor(){

    this.observable.subscribe(
      x => console.log('You moved your mouse'),
      x => console.error('There was an error'),
      () => console.log('the Observable stream has ended')
    );
    
  }

}