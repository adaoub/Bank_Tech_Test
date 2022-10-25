const Bank = require("./bankAccount");

describe("BankAccount", () => {
  it("user can make a deposit and the total balance is incremented", () => {
    const bank = new Bank();
    bank.makeDeposit(1000, "10/01/2012");
    expect(bank.getBalance()).toEqual(1000);
  });

  it("user can make a withdraw and the total balance in decremneted", () => {
    const bank = new Bank();
    bank.makeDeposit(1000, "10/01/2012");
    bank.makeWithdraw(500, "13/01/2012");
    expect(bank.getBalance()).toEqual(500);
  });

  it("check if deposit transaction is added to statement array", () => {
    const bank = new Bank();
    bank.makeDeposit(1000, "10/01/2012");
    expect(bank.statement).toEqual([
      { date: "10/01/2012", credit: 1000, debit: "", balance: 1000 },
    ]);
  });

  it("check if withdraw transaction is added to statement array", () => {
    const bank = new Bank();
    bank.makeDeposit(1000, "10/01/2012");
    bank.makeWithdraw(500, "13/01/2012");
    expect(bank.statement).toEqual([
      { date: "10/01/2012", credit: 1000, debit: "", balance: 1000 },
      { date: "13/01/2012", credit: "", debit: 500, balance: 500 },
    ]);
  });

  it("#getStatement returns the statement array", () => {
    const bank = new Bank();
    bank.makeDeposit(1000, "10/01/2012");
    bank.makeWithdraw(500, "13/01/2012");
    bank.makeDeposit(2000, "14/01/2012");
    expect(bank.getStatement()).toEqual([
      { date: "10/01/2012", credit: 1000, debit: "", balance: 1000 },
      { date: "13/01/2012", credit: "", debit: 500, balance: 500 },
      { date: "14/01/2012", credit: 2000, debit: "", balance: 2500 },
    ]);
  });
});
