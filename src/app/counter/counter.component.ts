import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  counter: number = 0;
   
  @Input() title!: string;

  @Output() counterEmmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.counter = localStorage.getItem('counter') != undefined ? parseInt(localStorage.getItem('counter')!) : 0;
  }

  setCounter(): void{
    this.counter = this.counter +1;
    localStorage.setItem('counter', this.counter.toString());
    this.counterEmmit.emit(this.counter);
  }

}
