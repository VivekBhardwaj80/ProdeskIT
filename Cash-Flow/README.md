# 💰 Cash-Flow Tracker

A responsive Salary & Expense Tracker built using **HTML, CSS, and Vanilla JavaScript**. The application allows users to manage their salary, track expenses, visualize spending, and persist data using LocalStorage.

---


## 📸 Screenshot

Add a screenshot of your application inside the repository and replace the path below.

```md
![Cash Flow Tracker Screenshot](./assets/screenshot/image.jpg)
```

---

# 📌 Features

## ✅ Phase 1 - Base MVP

- Add Total Salary
- Add Expense Name
- Add Expense Amount
- Input Validation
- Dynamic Expense List Rendering
- Calculate Remaining Balance

### Formula

```text
Remaining Balance = Total Salary - Total Expenses
```

---

## ✅ Phase 2 - Data Persistence & Visualization

### Local Storage

- Save salary and expenses
- Restore data after page refresh

### Delete Expense

- Remove expense from DOM
- Update LocalStorage
- Recalculate remaining balance

### Pie Chart

Built using **Chart.js**

Displays:

- Remaining Balance
- Total Expenses

---

## ✅ Phase 3 - Advanced Features

### Download Report

Generate PDF reports using **jsPDF**

### Currency Converter

Supports:

- INR
- USD

Uses:

```text
https://api.frankfurter.app/latest?from=INR&to=USD
```

### Low Balance Warning

Triggers warning when:

```text
Remaining Balance < 10% of Total Salary
```

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Libraries

### Chart.js

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

### jsPDF

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
```

### API

Frankfurter Currency API

```text
https://api.frankfurter.app
```

---

# 📂 Folder Structure

```text
Cash-Flow/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── Prompts.md
├── assets/
│   └── screenshot.png
```

---

# 📊 Example Data

### Salary

```text
₹50,000
```

### Expenses

| Expense | Amount |
|----------|--------:|
| Rent | ₹15,000 |
| Food | ₹5,000 |
| Electricity | ₹2,500 |
| Internet | ₹1,000 |
| Transport | ₹3,000 |
| Shopping | ₹4,000 |
| Entertainment | ₹2,000 |

### Total Expenses

```text
₹32,500
```

### Remaining Balance

```text
₹17,500
```

---

# 🧠 Concepts Practiced

- DOM Manipulation
- Event Listeners
- Arrays and Objects
- Dynamic Rendering
- LocalStorage
- CRUD Operations
- API Fetch
- Chart.js
- PDF Generation
- State Management
- Input Validation

---

# 📚 References

### JavaScript DOM

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

### Local Storage

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

### Chart.js

https://www.chartjs.org/docs/latest/

### jsPDF

https://github.com/parallax/jsPDF

### Frankfurter API

https://www.frankfurter.app/

---

# 🎯 Sprint Details

**Project:** Cash-Flow (Salary & Expense Tracker)

**Sprint:** Sprint 02

**Organization:** Prodesk IT

**Objective:** Demonstrate JavaScript fundamentals including DOM Manipulation, Event Listeners, Data Persistence, and State Management.

---

## Author

**Vivek Sharma**

GitHub:

```text
https://github.com/VivekBhardwaj80/ProdeskIT/tree/main/Cash-Flow
```