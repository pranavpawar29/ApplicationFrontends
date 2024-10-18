import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type InvestmentInputModel } from './model/investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
//   templateUrl: './app.component.html',
// })
export class AppComponent {
  arr: number[] = [1,2,3,4,5];
    constructor(){
      this.arr.map(a =>console.log(a))
    }
  // resultData = signal<
  // {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[] | undefined
  // >(undefined);

  // resultData?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];
  // onCalculateInvestmentResults(data: InvestmentInputModel) {
  //   const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
  //   const annualData = [];
  //   let investmentValue = initialInvestment;
  
  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }
  
  //   this.resultData.set(annualData);
  //   // this.resultData = annualData;
  // }
}
