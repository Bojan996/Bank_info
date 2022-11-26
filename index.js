const { euribor_DOWN, euribor_UP, euribor_STABLE } = require('./euribor_data');
const { monthlyPaymentFormula } = require('./functions');

const BANK_FIXED_RATE = 3;
const TOTAL_LOAN = 70000;
const YEARS = 30;

// ----------------------- COMBINED EURIBOR -----------------------
const log_combined_euribor_data = () => {
    const key_word_config = ["UP", "DOWN", "STABLE"]
    for(let i = 0; i < key_word_config.length; i++) {
        const euribor_data = key_word_config[i] === "UP" ? euribor_UP : key_word_config[i] === "DOWN" ? euribor_DOWN : euribor_STABLE;
        //eur six
        let total_interest_rate_first_half = BANK_FIXED_RATE + euribor_data.sixMonth.firstHalf;
        let total_interest_rate_second_half = BANK_FIXED_RATE + euribor_data.sixMonth.secondHalf;
        let eur_montlhy_first_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_half));
        let eur_montlhy_second_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_half));
        let eur_six_yearly_total = (eur_montlhy_first_half * 6) + (eur_montlhy_second_half * 6);
        
        //eur three
        let total_interest_rate_first_quarter = BANK_FIXED_RATE + euribor_data.threeMonth.firstQuarter;
        let total_interest_rate_second_quarter = BANK_FIXED_RATE + euribor_data.threeMonth.secondQuarter;
        let total_interest_rate_third_quarter = BANK_FIXED_RATE + euribor_data.threeMonth.thirdQuarter;
        let total_interest_rate_fourth_quarter = BANK_FIXED_RATE + euribor_data.threeMonth.fourthQuarter;
        let eur_montlhy_first_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_quarter));
        let eur_montlhy_second_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_quarter));
        let eur_montlhy_third_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_third_quarter));
        let eur_montlhy_fourth_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_fourth_quarter));
        let eur_three_yearly_total = (eur_montlhy_first_quarter * 3) + (eur_montlhy_second_quarter * 3) + (eur_montlhy_third_quarter * 3) + (eur_montlhy_fourth_quarter * 3);
        
        console.log(' ');
        console.log('***********************************');
        console.log(`          ${key_word_config[i] === "UP" ? "   " : key_word_config[i] === "DOWN" ? " " : ""}              Going ${key_word_config[i]}:`);
        console.log("                3m eur" + "              " + "   6m eur");
        
        console.log("First Quarter:  " + eur_montlhy_first_quarter + '                 ' + eur_montlhy_first_half);
        console.log("Second Quarter: " + eur_montlhy_second_quarter + '                 ' + eur_montlhy_first_half);
        console.log("Third Quarter:  " + eur_montlhy_third_quarter + '                 ' + eur_montlhy_second_half);
        console.log("Fourth Quarter: " + eur_montlhy_fourth_quarter + '                 ' + eur_montlhy_second_half);
        console.log("Total 1 year:   " + eur_three_yearly_total.toFixed(2) + '       vs       ' + eur_six_yearly_total.toFixed(2));
        console.log('***********************************');
        console.log(' ');
    }
}

log_combined_euribor_data();
// ----------------------- COMBINED EURIBOR -----------------------

// ----------------------- SIX MONTH EURIBOR -----------------------
const log_six_month_euribor_data = () => {
    //eur UP
    let total_interest_rate_first_half_UP = BANK_FIXED_RATE + euribor_UP.sixMonth.firstHalf;
    let total_interest_rate_second_half_UP = BANK_FIXED_RATE + euribor_UP.sixMonth.secondHalf;
    let eur_UP_montlhy_first_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_half_UP));
    let eur_UP_montlhy_second_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_half_UP));
    let eur_six_UP_yearly_total = (eur_UP_montlhy_first_half * 6) + (eur_UP_montlhy_second_half * 6);
    console.log(' ');
    console.log('***********************************');
    console.log("Eurbor going UP, first six months: " + eur_UP_montlhy_first_half);
    console.log("Eurbor going UP, second six months: " + eur_UP_montlhy_second_half);
    console.log("Total in 1 year: " + eur_six_UP_yearly_total.toFixed(2));
    console.log('***********************************');
    console.log(' ');

    //eur DOWN
    let total_interest_rate_first_half_DOWN = BANK_FIXED_RATE + euribor_DOWN.sixMonth.firstHalf;
    let total_interest_rate_second_half_DOWN = BANK_FIXED_RATE + euribor_DOWN.sixMonth.secondHalf;
    let eur_DOWN_montlhy_first_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_half_DOWN));
    let eur_DOWN_montlhy_second_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_half_DOWN));
    let eur_six_DOWN_yearly_total = (eur_DOWN_montlhy_first_half * 6) + (eur_DOWN_montlhy_second_half * 6);
    console.log('***********************************');
    console.log("Eurbor going DOWN, first six months: " + eur_DOWN_montlhy_first_half);
    console.log("Eurbor going DOWN, second six months: " + eur_DOWN_montlhy_second_half);
    console.log("Total in 1 year: " + eur_six_DOWN_yearly_total.toFixed(2));
    console.log('***********************************');
    console.log(' ');

    //eur STABLE
    let total_interest_rate_first_half_STABLE = BANK_FIXED_RATE + euribor_STABLE.sixMonth.firstHalf;
    let total_interest_rate_second_half_STABLE = BANK_FIXED_RATE + euribor_STABLE.sixMonth.secondHalf;
    let eur_STABLE_montlhy_first_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_half_STABLE));
    let eur_STABLE_montlhy_second_half = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_half_STABLE));
    let eur_six_STABLE_yearly_total = (eur_STABLE_montlhy_first_half * 6) + (eur_STABLE_montlhy_second_half * 6);
    console.log('***********************************');
    console.log("Eurbor going STABLE, first six months: " + eur_STABLE_montlhy_first_half);
    console.log("Eurbor going STABLE, second six months: " + eur_STABLE_montlhy_second_half);
    console.log("Total in 1 year: " + eur_six_STABLE_yearly_total.toFixed(2));
    console.log('***********************************');
    console.log(' ');
}
// log_six_month_euribor_data();
// ----------------------- SIX MONTH EURIBOR -----------------------

// ----------------------- THREE MONTH EURIBOR -----------------------
const log_three_month_euribor_data = () => {
    //eur UP
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
    console.log("Eurbor going UP, first quarter: " + eur_UP_montlhy_first_quarter);
    console.log("Eurbor going UP, second quarter: " + eur_UP_montlhy_second_quarter);
    console.log("Eurbor going UP, third quarter: " + eur_UP_montlhy_third_quarter);
    console.log("Eurbor going UP, fourth quarter: " + eur_UP_montlhy_fourth_quarter);
    console.log("Total in 1 year: " + eur_three_UP_yearly_total.toFixed(2));
    console.log('***********************************');
    console.log(' ');

    //eur DOWN
    let total_interest_rate_first_quarter_DOWN = BANK_FIXED_RATE + euribor_DOWN.threeMonth.firstQuarter;
    let total_interest_rate_second_quarter_DOWN = BANK_FIXED_RATE + euribor_DOWN.threeMonth.secondQuarter;
    let total_interest_rate_third_quarter_DOWN = BANK_FIXED_RATE + euribor_DOWN.threeMonth.thirdQuarter;
    let total_interest_rate_fourth_quarter_DOWN = BANK_FIXED_RATE + euribor_DOWN.threeMonth.fourthQuarter;
    let eur_DOWN_montlhy_first_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_quarter_DOWN));
    let eur_DOWN_montlhy_second_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_quarter_DOWN));
    let eur_DOWN_montlhy_third_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_third_quarter_DOWN));
    let eur_DOWN_montlhy_fourth_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_fourth_quarter_DOWN));
    let eur_three_DOWN_yearly_total = (eur_DOWN_montlhy_first_quarter * 3) + (eur_DOWN_montlhy_second_quarter * 3) + (eur_DOWN_montlhy_third_quarter * 3) + (eur_DOWN_montlhy_fourth_quarter * 3);
    console.log(' ');
    console.log('***********************************');
    console.log("Eurbor going DOWN, first quarter: " + eur_DOWN_montlhy_first_quarter);
    console.log("Eurbor going DOWN, second quarter: " + eur_DOWN_montlhy_second_quarter);
    console.log("Eurbor going DOWN, third quarter: " + eur_DOWN_montlhy_third_quarter);
    console.log("Eurbor going DOWN, fourth quarter: " + eur_DOWN_montlhy_fourth_quarter);
    console.log("Total in 1 year: " + eur_three_DOWN_yearly_total.toFixed(2));
    console.log('***********************************');
    console.log(' ');

    //eur STABLE
    let total_interest_rate_first_quarter_STABLE = BANK_FIXED_RATE + euribor_STABLE.threeMonth.firstQuarter;
    let total_interest_rate_second_quarter_STABLE = BANK_FIXED_RATE + euribor_STABLE.threeMonth.secondQuarter;
    let total_interest_rate_third_quarter_STABLE = BANK_FIXED_RATE + euribor_STABLE.threeMonth.thirdQuarter;
    let total_interest_rate_fourth_quarter_STABLE = BANK_FIXED_RATE + euribor_STABLE.threeMonth.fourthQuarter;
    let eur_STABLE_montlhy_first_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_first_quarter_STABLE));
    let eur_STABLE_montlhy_second_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_second_quarter_STABLE));
    let eur_STABLE_montlhy_third_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_third_quarter_STABLE));
    let eur_STABLE_montlhy_fourth_quarter = Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_interest_rate_fourth_quarter_STABLE));
    let eur_three_STABLE_yearly_total = (eur_STABLE_montlhy_first_quarter * 3) + (eur_STABLE_montlhy_second_quarter * 3) + (eur_STABLE_montlhy_third_quarter * 3) + (eur_STABLE_montlhy_fourth_quarter * 3);
    console.log(' ');
    console.log('***********************************');
    console.log("Eurbor going STABLE, first quarter: " + eur_STABLE_montlhy_first_quarter);
    console.log("Eurbor going STABLE, second quarter: " + eur_STABLE_montlhy_second_quarter);
    console.log("Eurbor going STABLE, third quarter: " + eur_STABLE_montlhy_third_quarter);
    console.log("Eurbor going STABLE, fourth quarter: " + eur_STABLE_montlhy_fourth_quarter);
    console.log("Total in 1 year: " + eur_three_STABLE_yearly_total.toFixed(2));
    console.log('***********************************');
    console.log(' ');
}
// log_three_month_euribor_data();
// ----------------------- THREE MONTH EURIBOR -----------------------