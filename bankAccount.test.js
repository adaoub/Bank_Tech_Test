const Bank = require("./bankAccount");

describe("BankAccount", () => {
  it("user can make a deposit and the total balance is incremented", () => {
    const bank = new Bank();
    bank.makeDeposit(1000);
    expect(bank.getBalance()).toEqual(1000);
  });
});
