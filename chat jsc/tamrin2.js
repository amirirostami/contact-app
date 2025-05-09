// مدیریت هزینه

let total = 0;
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

window.addEventListener("DOMContentLoaded", loadExpenses);

document.getElementById("addExpense").addEventListener("click", function () {
  let meghdar = parseInt(document.getElementById("amount").value);
  let tozih = document.getElementById("description").value.trim();
  let daste = document.getElementById("taskCategory").value;

  if (isNaN(meghdar)) {
    alert("حتما باید عدد باشد");
    return;
  }

  if (!isNaN(tozih) || tozih === "") {
    alert("حتما باید توضیحی بنویسید !!");
    return;
  }

  let newExpense = {
    amount: meghdar,
    description: tozih,
    category: daste,
  };

  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  addExpenseToDOM(newExpense);

  total += meghdar;
  document.getElementById("totalAmount").innerText = total;

  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
});

function addExpenseToDOM(expense) {
  let ul = document.getElementById("expenseList");
  let lis = document.createElement("li");

  lis.innerHTML =
    "مقدار هزینه = " +
    expense.amount +
    " تومان" +
    "<br/>" +
    "توضیحات هزینه = " +
    expense.description +
    "<br/>" +
    "دسته بندی = " +
    expense.category;

  let delet = document.createElement("button");
  delet.textContent = "X";
  delet.classList = "delete-button";
  delet.addEventListener("click", function () {
    ul.removeChild(lis);
    expenses = expenses.filter((e) => e !== expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    total -= expense.amount;
    document.getElementById("totalAmount").innerText = total;
  });

  lis.appendChild(delet);
  ul.appendChild(lis);
}

function loadExpenses() {
  if (!Array.isArray(expenses)) {
    expenses = [];
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  expenses.forEach(function (expense) {
    addExpenseToDOM(expense);
    total += expense.amount;
  });
  document.getElementById("totalAmount").innerText = total;
}
