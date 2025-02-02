import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  
  
  
  title: string = 'Hola mundito de angular :D';
  
  subTitle: string = 'contador con estado de sesion'
  
  users: string[] = ['pepe', 'brayan'];
  
  visible: boolean = false;
  
  counter: number = 0;
  
  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('hemos hecho click en setvisible');
  }
  
  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0
  }

  setCounter(counter: number) :void {
    this.counter = counter;
  }
}
