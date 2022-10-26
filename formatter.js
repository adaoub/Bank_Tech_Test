const Bank = require("./bankAccount");

class StatementFormatter {
  constructor(bankAccount) {
    this.bankAccount = bankAccount;
  }

  //Format the statement using console.table

  formatStatementAsTable = () => {
    return this.bankAccount.getStatement();
  };

  //Format the statemnt as a string

  formatStatement = () => {
    const statement = this.bankAccount.getStatement();
    const header = "date || credit || debit || balance";
    const body = statement
      .map((transaction) => {
        return `${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`;
      })
      .join("\n");
    return `${header}\n${body}`;
  };
}

module.exports = StatementFormatter;
