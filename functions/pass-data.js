// Pass data to functions through parameters

const tipCalculator = (sum, percentage, currency, prefix) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    // we use if statement because we want to display a different currency 
    if (prefix) {
        console.log (
            Sum before tip: ${currency}${sum}
            Tip percentage: ${percentage}%
            Tip: ${currency} ${tip.toFixed(2)}
            Total: ${currency} ${total.toFixed(2)}
        );
    } else {
        console.log (
            Sum before tip:   ${sum}${currency}
            Tip percentage:   ${percentage}%
            Tip:              ${tip.toFixed(2)}${currency}
            Total:            ${total.toFixed(2)}${currency}
        );
    }
};

tipCalculator(29.95, 28, "$," true);

// 29.95 - sum
// 28 - tip
// $ - currency 
// true - boolean value