class Budget {

    constructor(accountants, administrators, it) {

        this.accountants = accountants;
        this.administrators = administrators;
        this.it = it;
        this.totalCost = this.totalBudget();
    }

    accountantsBudget() {
        return this.accountants.amountByQuantity()
    }

    administratorBudget() {
        return this.administrators.amountByQuantity()
    }

    itBudget() {
        return this.it.amountByQuantity()
    }

    totalBudget() {
        return this.accountantsBudget() + this.administratorBudget() + this.itBudget();
    }
}