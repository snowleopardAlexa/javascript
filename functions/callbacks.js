// Using a callback functions

// helper function to format currency numbers. Used by tipCalculator
const formatter = (locale = "en-US", currency="USD", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);

    return formattedValue;
};

// Callback recieves finalTip object, creates and outputs table on the DOM
const printHTML = (finalTip) => {
    const tipTable = document.createElement("table");
    tipTable.innerHTML = `
     <tr>
       <td>Sum before tip:</td>
       <td>${finalTip.sum}</td>
       </tr>
       <tr>
        <td>Tip percentage:<td>
        <td>${finalTip.percentage}</td>
        </td>
        <tr>
        <td>Tip:</td>
        <td>${finalTop.tip}</td>
        </td>
        <tr>
        <td>Total:</td>
        <td>${finalTip.total}</td>
        </tr>
        `;
        document.querySelector("main").append(tipTable);
};

// create a finalTip object with all the data. Send it to the printHTML callback 
const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;

    const finalTip = {
        sum: formatter(locale, currency, sum),
        percentage: percentage + "%",
        tip: formatter(locale, currency, tip),
        total: formatter(locale, currency, total),
    };
};

tipCalculator(29.95, 18, "de-DE", "EUR");

