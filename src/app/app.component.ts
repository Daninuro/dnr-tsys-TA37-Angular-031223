import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  screen:string = '';
  resultScreen:string = '';
  operation: Array<string> = [];

  
  number(valor: string): void {
    this.screen += valor;
  }

  deleteLastNumber(): void {
    this.screen = this.screen.slice(0, -1);
  }


  doOperation(operacion: string): void {
    this.operation.push(this.screen, operacion);
    this.screen = '';
  }

  result(): void {
    this.operation.push(this.screen);
    const expresion = this.operation.join(' ');
    this.screen = eval(expresion).toString();
    this.operation = [];
  }
}