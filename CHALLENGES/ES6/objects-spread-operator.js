// Objects with spread operator
const daytime = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};

const nighttime = "mac and cheese";

const backpackingMeals = {
    // 3 dots --> we push the items from one object to the others
    ...daytime,
    nighttime
};

console.log(backpackingMeals);

