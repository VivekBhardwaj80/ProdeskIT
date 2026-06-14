// const salaryInput = document.getElementById("salary");
// const expenseNameInput = document.getElementById("expenseName");
// const expenseAmountInput = document.getElementById("expenseAmount");
// const addExpenseBtn = document.getElementById("addExpenseBtn");

// const salaryDisplay = document.getElementById("salaryDisplay");
// const expenseDisplay = document.getElementById("expenseDisplay");
// const balanceDisplay = document.getElementById("balanceDisplay");
// const expenseList = document.getElementById("expenseList");

// let expenses = [];

// addExpenseBtn.addEventListener("click", () => {
//   const salary = Number(salaryInput.value);
//   const expenseName = expenseNameInput.value;
//   const expenseAmount = Number(expenseAmountInput.value);

//   if (salary <= 0 || expenseName === "" || expenseAmount <= 0) {
//     alert("Please enter valid values");
//     return;
//   }

//   const expense = {
//     id: Date.now(),
//     name: expenseName,
//     amount: expenseAmount,
//   };

//   expenses.push(expense);

//   function renderData(salary) {
//     expenseList.innerHTML = "";

//     let totalExpense = 0;

//     expenses.forEach((expense) => {
//       totalExpense += expense.amount;

//       const li = document.createElement("li");

//       li.innerHTML = `
//             <span>${expense.name}</span>
//             <span>₹${expense.amount}</span>
//             <button onclick="deleteExpense(${expense.id})">
//                 Delete
//             </button>
//         `;

//       expenseList.appendChild(li);
//     });

//     salaryDisplay.textContent = salary;
//     expenseDisplay.textContent = totalExpense;
//     balanceDisplay.textContent = salary - totalExpense;
//   }
//   function deleteExpense(id) {
//     expenses = expenses.filter((expense) => expense.id !== id);

//     renderData(Number(salaryInput.value));
//   }

//   expenseNameInput.value = "";
//   expenseAmountInput.value = "";
// });

// function renderData(salary) {
//   expenseList.innerHTML = "";

//   let totalExpense = 0;

//   expenses.forEach((expense) => {
//     totalExpense += expense.amount;

//     const li = document.createElement("li");

//     li.innerHTML = `
//             <span>${expense.name}</span>
//             <span>₹${expense.amount}</span>
//         `;

//     expenseList.appendChild(li);
//   });

//   salaryDisplay.textContent = salary;

//   expenseDisplay.textContent = totalExpense;

//   balanceDisplay.textContent = salary - totalExpense;
// }

const salaryInput = document.getElementById("salary");
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");

const salaryDisplay = document.getElementById("salaryDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");

const expenseList = document.getElementById("expenseList");

const warning = document.getElementById("warning");

const currency = document.getElementById("currency");

const downloadBtn = document.getElementById("downloadBtn");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

salaryInput.value = localStorage.getItem("salary") || "";

let chart;

addExpenseBtn.addEventListener("click", () => {
  const salary = Number(salaryInput.value);

  const expenseName = expenseNameInput.value;

  const expenseAmount = Number(expenseAmountInput.value);

  if (salary <= 0 || expenseName === "" || expenseAmount <= 0) {
    alert("Invalid Input");
    return;
  }

  const expense = {
    id: Date.now(),
    name: expenseName,
    amount: expenseAmount,
  };

  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  localStorage.setItem("salary", salary);

  renderData(salary);

  expenseNameInput.value = "";
  expenseAmountInput.value = "";
});

function renderData(salary) {
  expenseList.innerHTML = "";

  let totalExpense = 0;

  expenses.forEach((expense) => {
    totalExpense += expense.amount;

    const li = document.createElement("li");

    li.innerHTML = `
        ${expense.name}
        ₹${expense.amount}

        <button
        class="deleteBtn"
        onclick="deleteExpense(${expense.id})">
        Delete
        </button>
        `;

    expenseList.appendChild(li);
  });

  salaryDisplay.textContent = salary;

  expenseDisplay.textContent = totalExpense;

  const balance = salary - totalExpense;

  balanceDisplay.textContent = balance;

  if (balance < salary * 0.1) {
    warning.textContent = "⚠ Balance below 10%";

    balanceDisplay.style.color = "red";
  } else {
    warning.textContent = "";

    balanceDisplay.style.color = "green";
  }

  renderChart(balance, totalExpense);
}

function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderData(Number(salaryInput.value));
}

function renderChart(balance, totalExpense) {
  const ctx = document.getElementById("myChart");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "pie",

    data: {
      labels: ["Balance", "Expenses"],

      datasets: [
        {
          data: [balance, totalExpense],
        },
      ],
    },
  });
}

downloadBtn.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  doc.text("Cash Flow Report", 20, 20);

  let y = 40;

  expenses.forEach((expense) => {
    doc.text(`${expense.name} : ₹${expense.amount}`, 20, y);

    y += 10;
  });

  doc.save("CashFlowReport.pdf");
});

currency.addEventListener("change", convertCurrency);

async function convertCurrency() {
  if (currency.value === "INR") {
    renderData(Number(salaryInput.value));

    return;
  }

  const response = await fetch(
    "https://api.frankfurter.app/latest?from=INR&to=USD",
  );

  const data = await response.json();

  const rate = data.rates.USD;

  salaryDisplay.textContent = (Number(salaryInput.value) * rate).toFixed(2);
}

renderData(Number(salaryInput.value));
