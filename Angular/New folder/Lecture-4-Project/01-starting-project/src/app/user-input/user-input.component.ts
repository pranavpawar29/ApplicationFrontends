import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInputModel } from '../model/investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
// @Component({
//   selector: 'app-user-input',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './user-input.component.html',
//   styleUrl: './user-input.component.css'
// })
export class UserInputComponent {
  constructor(private invetsmentService: InvestmentService){

  }
  // calculate = output<InvestmentInputModel>();
  // @Output() calculate = new EventEmitter<InvestmentInputModel>();
  enteredInitialInvestment = signal('0');
  // enteredInitialInvestment = '0';
  enteredAnnualInvestment =signal('0');
  // enteredAnnualInvestment ='0';
  enteredExpectedReturn =signal('5');
  // enteredExpectedReturn ='5';
  enteredDuration = signal('10');
  // enteredDuration = '10';
  
  onSubmit(){
  //   this.calculate.emit({
  //     initialInvestment: +this.enteredInitialInvestment(), 
  //     duration: +this.enteredDuration(), 
  //     expectedReturn: +this.enteredExpectedReturn(), 
  //     annualInvestment: +this.enteredAnnualInvestment()
  // });
  this.invetsmentService.onCalculateInvestmentResults({
    initialInvestment: +this.enteredInitialInvestment(), 
    duration: +this.enteredDuration(), 
    expectedReturn: +this.enteredExpectedReturn(), 
    annualInvestment: +this.enteredAnnualInvestment()
  })
  this.enteredAnnualInvestment.set('0');
  this.enteredInitialInvestment.set('0');
  this.enteredExpectedReturn.set('5');
  this.enteredDuration.set('10');

  //   this.calculate.emit({
  //     initialInvestment: +this.enteredInitialInvestment, 
  //     duration: +this.enteredDuration, 
  //     expectedReturn: +this.enteredExpectedReturn, 
  //     annualInvestment: +this.enteredAnnualInvestment
  // });
  }
}
