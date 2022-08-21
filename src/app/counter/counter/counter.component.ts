import { CounterState } from './../state/counter.state';
import { increment, decrement, reset } from './../state/counter.action';
import { Store } from '@ngrx/store';
import { CounterService } from './../../service/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private counterService:CounterService, private store:Store<{counter:{counter:CounterState}}>) { }

  ngOnInit(): void {
  }
  
  


}
