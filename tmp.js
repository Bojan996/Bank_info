//eur six UP
let total_interest_rate_first_half_UP = BANK_FIXED_RATE + euribor_UP.sixMonth.firstHalf;
let total_interest_rate_second_half_UP = BANK_FIXED_RATE + euribor_UP.sixMonth.secondHalf;
let eur_UP_montlhy_first_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_half_UP));
let eur_UP_montlhy_second_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_half_UP));
let eur_six_UP_yearly_total = (eur_UP_montlhy_first_half * 6) + (eur_UP_montlhy_second_half * 6);

//eur three UP
let total_interest_rate_first_quarter_UP = BANK_FIXED_RATE + euribor_UP.threeMonth.firstQuarter;
let total_interest_rate_second_quarter_UP = BANK_FIXED_RATE + euribor_UP.threeMonth.secondQuarter;
let total_interest_rate_third_quarter_UP = BANK_FIXED_RATE + euribor_UP.threeMonth.thirdQuarter;
let total_interest_rate_fourth_quarter_UP = BANK_FIXED_RATE + euribor_UP.threeMonth.fourthQuarter;
let eur_UP_montlhy_first_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_quarter_UP));
let eur_UP_montlhy_second_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_quarter_UP));
let eur_UP_montlhy_third_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_third_quarter_UP));
let eur_UP_montlhy_fourth_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_fourth_quarter_UP));
let eur_three_UP_yearly_total = (eur_UP_montlhy_first_quarter * 3) + (eur_UP_montlhy_second_quarter * 3) + (eur_UP_montlhy_third_quarter * 3) + (eur_UP_montlhy_fourth_quarter * 3);

console.log(' ');
console.log('***********************************');
console.log("Eurbor going UP:");
console.log("             3m euribor" + "              " + "6m euribor");

console.log("First Quarter:  " + eur_UP_montlhy_first_quarter + '                 ' + eur_UP_montlhy_first_half);
console.log("Second Quarter: " + eur_UP_montlhy_second_quarter + '                 ' + eur_UP_montlhy_first_half);
console.log("Third Quarter:  " + eur_UP_montlhy_third_quarter + '                 ' + eur_UP_montlhy_second_half);
console.log("Fourth Quarter: " + eur_UP_montlhy_fourth_quarter + '                 ' + eur_UP_montlhy_second_half);
console.log("Total 1 year:   " + eur_three_UP_yearly_total.toFixed(2) + '        vs       ' + eur_six_UP_yearly_total.toFixed(2));
console.log('***********************************');
console.log(' ');