class BankAccount {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  makeDeposit = (amount, date) => {
    this.balance += amount;
    this.date = date;
    this.credit = amount;
  };

  getBalance = () => {
    return this.balance;
  };
}

module.exports = BankAccount;
