import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-calculator-expanded',
  templateUrl: './calculator-expanded.component.html',
  styleUrls: ['./calculator-expanded.component.css']
})
export class CalculatorExpandedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // addButton() {
  //   $(document).ready(function () {
  //     $(".number").click(function () {
  //       // alert($(this).val());
  //       $(".result-box").text($(this).text());
  //     });
  //   });
  // }

  // showValue() {
  //   $(document).ready(function () {
  //     $('button').on('click', function (e) {
  //       console.log('e', e.target.innerHTML);
  //     });
  //   });
  // };


  showButton() {
    $(document).ready(function () {
      $('button').click(function (e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') { $.fn.handleFunction(btn); }
        else { $.fn.handleOperator(btn); }
      });
      $.fn.handleFunction = function (number) {
        alert(number);
      }

      $.fn.handleOperator = function (operator) {
        alert(operator);
      }
    });
  };

}