// Return values from a function

const formatter = (value) => {
    let formattedValue = new Int1.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
    }).format(value)
    return formattedValue
};

const tipCalculator = (sum, percentage) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    console.log (
            Sum before tip:  ${formatter(sum)}
            Tip percentage:  ${percentage}%
            Tip:             ${formatter(tip)}
            Total:           ${formatter(total)}
        );
};

tipCalculator(29.95, 18);

// add parameters - locale, currency 
const formatter = (locale, currency, value) => {
    let formattedValue = new Int1.NumberFormat(locale, {
        style: "currency",
        currency: "currency,
    }).format(value)
    return formattedValue
};

const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    console.log (
            Sum before tip:  ${formatter(locale, currency, sum)}
            Tip percentage:  ${percentage}%
            Tip:             ${formatter(locale, currency, tip)}
            Total:           ${formatter(locale, currency, total)}
        );
};

tipCalculator(29.95, 18, "de-DE", "EUR");

