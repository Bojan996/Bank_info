const fs = require('fs-extra');
const euribor_data = fs.readJsonSync("./euribor_data.json");
const { monthlyPaymentFormula } = require('../functions');

const BANK_FIXED_RATE = 2.99;
const TOTAL_LOAN = 70000;
const YEARS = 30;
// const WHAT_EURIBOR = "eur_6m";
const WHAT_EURIBOR = "eur_3m";

const calculated_data = Object.keys(euribor_data[WHAT_EURIBOR]).map(year_key => {
    let tmp_calculated_data = {
        year: year_key.replace("year_", ""),
        year_total_payment: 0,
        monthly_payements: euribor_data[WHAT_EURIBOR][year_key].rate_array.map(eur_rate => {
            let total_rate = BANK_FIXED_RATE + Number(eur_rate);
            return Number(monthlyPaymentFormula(TOTAL_LOAN, YEARS, total_rate))
        })
    }
    let all_monthly_payements = [];
    if(WHAT_EURIBOR === "eur_6m"){
        let pay = tmp_calculated_data.monthly_payements;
        all_monthly_payements = [pay[0], pay[0], pay[0], pay[0], pay[0], pay[0], pay[1], pay[1], pay[1], pay[1], pay[1], pay[1]];
    } else {
        let pay = tmp_calculated_data.monthly_payements;
        all_monthly_payements = [pay[0], pay[0], pay[0], pay[1], pay[1], pay[1], pay[2], pay[2], pay[2], pay[3], pay[3], pay[3]];
    }
    tmp_calculated_data.year_total_payment = Number((all_monthly_payements.reduce((c, a) => c + a, 0)).toFixed(2));

    return tmp_calculated_data;
});

fs.writeJSONSync(`./${WHAT_EURIBOR}.json`, calculated_data);