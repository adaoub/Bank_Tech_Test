const Bank = require("./bankAccount");
const StatementFormatter = require("./formatter");

describe("StatementFormatter", () => {
  it("formats the statement as a string", () => {
    const bank = new Bank();
    const formatter = new StatementFormatter(bank);
    bank.makeDeposit(500.0, "14/01/2023");
    bank.makeDeposit(2000.0, "13/01/2023 ");
    bank.makeWithdraw(1000.0, "10/01/2023");
    expect(formatter.formatStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 || 500 ||  || 500\n13/01/2023  || 2000 ||  || 2500\n10/01/2023 ||  || 1000 || 1500"
    );
  });

  it("returns the statemnet array so that it can to printed using console.table", () => {
    const bank = new Bank();
    const formatter = new StatementFormatter(bank);
    bank.makeDeposit(500.0, "14/01/2023");
    bank.makeDeposit(2000.0, "13/01/2023 ");
    bank.makeWithdraw(1000.0, "10/01/2023");
    expect(formatter.formatStatementAsTable()).toEqual([
      { date: "14/01/2023", credit: 500, debit: "", balance: 500 },
      { date: "13/01/2023 ", credit: 2000, debit: "", balance: 2500 },
      { date: "10/01/2023", credit: "", debit: 1000, balance: 1500 },
    ]);
  });
});
