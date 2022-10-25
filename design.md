# Specification

**Given** a client makes a deposit of 1000 on 10-01-2023

**And** a deposit of 2000 on 13-01-2023

**And** a withdrawal of 500 on 14-01-2023

**When** she prints her bank statement

**Then** she would see:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

# Design

1- Function that gets the amonut deposited

    makeDeposit(amount, date)

2- Function that gets the amonut withdrawn

    makeWithdraw(amount, date)

3- Function that calculates the total balance

    getTotal()

4- Function that renders the table and object

    displayStatement()
