class BankAccount {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  makeDeposit = (amount, date) => {
    this.balance += amount;
    this.date = date;
    this.credit = amount;

    this.statement.push({
      date: this.date,
      credit: this.credit,
      debit: "",
      balance: this.balance,
    });
  };

  makeWithdraw = (amount, date) => {
    this.balance -= amount;
    this.date = date;
    this.debit = amount;

    this.statement.push({
      date: this.date,
      credit: "",
      debit: this.debit,
      balance: this.balance,
    });
  };

  getBalance = () => {
    return this.balance;
  };

  getStatement = () => {
    return this.statement;
  };
}

module.exports = BankAccount;
