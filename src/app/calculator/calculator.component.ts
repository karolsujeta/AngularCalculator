import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;
  public shownumbers: any;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.shownumbers = this.num1 + '+' + this.num2;
    this.result = this.num1 + this.num2;
  }

  subtract() {
    this.shownumbers = this.num1 + '-' + this.num2;
    this.result = this.num1 - this.num2;
  }

  multiply() {
    this.shownumbers = this.num1 + '*' + this.num2;
    this.result = this.num1 * this.num2;
  }

  devide() {
    this.shownumbers = this.num1 + '/' + this.num2;
    this.result = this.num1 / this.num2;
  }
}
