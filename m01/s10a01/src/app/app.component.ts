import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MillisecondsToSecondsPipe } from './pipes/milliseconds-to-seconds.pipe';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MillisecondsToSecondsPipe, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 's10a01';
  n1: number = 0;
  n2: number = 0;
  sum: number = 0;
  subtract: number = 0;
  divide: number = 0;
  multiply: number = 0;

  constructor(private calculator: CalculatorService){
    // this.n1 = 0;
    // this.n2 = 0;
    // this.sum = this.calculator.sum(this.n1, this.n2);
    // this.subtract = this.calculator.subtract(this.n1, this.n2);
    // this.divide = this.calculator.divide(this.n1, this.n2);
    // this.multiply = this.calculator.multiply(this.n1, this.n2);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // //Add 'implements OnInit' to the class.
  }

  calculate(){
    this.sum = this.calculator.sum(this.n1, this.n2);
    this.subtract = this.calculator.subtract(this.n1, this.n2);
    this.divide = this.calculator.divide(this.n1, this.n2);
    this.multiply = this.calculator.multiply(this.n1, this.n2);

    // alert(
    //   "sum: " + this.sum +
    //   "\nsubtract: " + this.subtract +
    //   "\ndivide: " + this.divide +
    //   "\nmultiply: " + this.sum
    // );

    // console.log("sum: ", this.sum );
    // console.log("subtract: ", this.subtract );
    // console.log("divide: ", this.divide );
    // console.log("multiply: ", this.multiply );
  }
}
