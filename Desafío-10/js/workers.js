// Constructor del objeto item.
class Workers {
    
    constructor () {
        this.quantity;
        this.hours;
        this.rate;
    }
    
    amountByQuantity () {
        return this.quantity * this.hours * this.rate;
    }
}

