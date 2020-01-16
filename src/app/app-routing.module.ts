import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorExpandedComponent } from './calculator-expanded/calculator-expanded.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'calculator-expanded', component: CalculatorExpandedComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponent = [
  CalculatorComponent, CalculatorExpandedComponent
];
