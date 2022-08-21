import { AppState } from './../../store/app.state';
import { increment, decrement, reset } from './../state/counter.action';
import { CounterService } from './../../service/counter.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store:Store<AppState>) {

   }
   
  

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment())
   
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
 
}
