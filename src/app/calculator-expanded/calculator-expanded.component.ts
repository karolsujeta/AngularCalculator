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
    let num1 = '';
    let num2 = '';
    let oper = '';

    $(document).ready(function () {
      $('button').click(function (e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') { $.fn.handleNumber(btn); }
        else { $.fn.handleOperator(btn); }
      });

      $.fn.handleNumber = function (number) {
        //alert(number);
        $.fn.displayButton(number);
        if (num1 === '') { num1 = number; }
        else { num2 = number; };
      }

      $.fn.handleOperator = function (operator) {
        if (oper === '') { oper = operator; }
        else { $.fn.handleTotal(); oper = operator; }
      }

      $.fn.displayButton = function (btn) {
        $('.result-box').text(btn);
      }

      $.fn.handleTotal = function () {
        switch (oper) {
          case "+": let total = +num1 + +num2; $.fn.displayButton(total); break;    //przy przekazywaniu totala do wyswietlenia ciągle wyświetla mi 0.
        }
      }
    });
  };
}