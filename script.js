function calculateData(){

  let totalBudget =
    Number(document.getElementById("budgetInput").value);

  let stayExpense =
    Number(document.getElementById("stayCost").value);

  let foodExpense =
    Number(document.getElementById("foodCost").value);

  let travelExpense =
    Number(document.getElementById("travelCost").value);

  let totalPeople =
    Number(document.getElementById("peopleCount").value);

  let totalUsedMoney =
    stayExpense + foodExpense + travelExpense;

  let splitAmount =
    totalUsedMoney / totalPeople;

  let remainingCash =
    totalBudget - totalUsedMoney;

  document.getElementById("splitResult").textContent =
    "₹" + splitAmount.toFixed(2);

  document.getElementById("moneyLeft").textContent =
    "Remaining Amount : ₹" + remainingCash;
}

function changeTheme(){
  document.body.classList.toggle("darkMode");
}