const BankAccount = require("./bankAccount");
const StatementFormatter = require("./formatter");
const bank = new BankAccount();
const formatter = new StatementFormatter(bank);
bank.makeDeposit(500.0, "14/01/2023");
bank.makeDeposit(2000.0, "13/01/2023 ");
bank.makeWithdraw(1000.0, "10/01/2023");

//Print as a table
console.table(formatter.formatStatementAsTable());

//use below code to print as a string
// console.log(formatter.formatStatement());
