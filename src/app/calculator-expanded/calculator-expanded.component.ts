import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-calculator-expanded',
  templateUrl: './calculator-expanded.component.html',
  styleUrls: ['./calculator-expanded.component.css']
})
export class CalculatorExpandedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addButton() {
    $(".number").click(function () {
      alert($(this).val());
    });
  }
}

