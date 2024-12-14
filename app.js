document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');
    const incomeDisplay = document.getElementById('income');
    const expensesDisplay = document.getElementById('expenses');
    const balanceDisplay = document.getElementById('balance');

    let income = 0;
    let expenses = 0;

    // Function to update the dashboard
    const updateDashboard = () => {
        incomeDisplay.textContent = income.toFixed(2);
        expensesDisplay.textContent = expenses.toFixed(2);
        balanceDisplay.textContent = (income - expenses).toFixed(2);
    };

    // Function to add a transaction
    transactionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (!description || isNaN(amount)) {
            alert('Please enter a valid description and amount.');
            return;
        }

        const transactionRow = document.createElement('tr');
        const date = new Date().toLocaleDateString();

        transactionRow.innerHTML = `
            <td>${description}</td>
            <td>${amount.toFixed(2)}</td>
            <td>${date}</td>
        `;

        transactionList.appendChild(transactionRow);

        if (amount > 0) {
            income += amount;
        } else {
            expenses += Math.abs(amount);
        }

        updateDashboard();

        transactionForm.reset(); // Clear the form
    });
});
