import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  counter:number = 6;

  increase(){
    this.counter++;
  }
  decrease(){
    this.counter--;
  }
  reset(){
    this.counter=0;

  }
}
