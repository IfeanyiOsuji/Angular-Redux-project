import { AppState } from './../../store/app.state';
import { Observable } from 'rxjs';
import { getChannelName } from './../state/counter.selector';
import { changeChannelName } from './../state/counter.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custome-counter-input',
  templateUrl: './custome-counter-input.component.html',
  styleUrls: ['./custome-counter-input.component.css']
})
export class CustomeCounterInputComponent implements OnInit {
  value!:number
  channelName$! : Observable<string>

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select(getChannelName).subscribe(channelName =>{
    //   this.channelName = channelName
    // })
    this.channelName$ = this.store.select(getChannelName)
  }
  onAdd(){
    if(this.value)
    this.store.dispatch(customIncrement({
      value:+this.value
    }))
    
  }
  onChangeChannelName(){
    this.store.dispatch(changeChannelName())
  }

}
