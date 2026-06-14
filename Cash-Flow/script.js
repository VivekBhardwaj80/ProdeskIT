const salaryInput  = document.getElementById("salary")
const expenseNameInput = document.getElementById("expenseName")
const expenseAmountInput = document.getElementById("expenseAmount")
const addExpenseBtn = document.getElementById("addExpenseBtn")

let salary = 0
let expenses = []


addExpenseBtn.addEventListener("click", () => {
    const salary = Number(salaryInput.value)
    const expenseName = (expenseNameInput.value)
    const expenseAmount = (expenseAmountInput.value)

    if(salary<=0 || expenseName === "" || expenseAmount === 0){
        alert("Please Enter valid value")
        return
    }

    const expense = {
        id:Date.now(),
        name:expenseName,
        amount:expenseAmount
    }
    expenses.push(expense)
    console.log(expense)
})


