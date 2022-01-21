// Constructor del objeto item.
class Item {
    constructor (workerQuantity, workerCostPerHour, hoursQuantity, workerId) {
        this.title = workerQuantity;
        this.cost = workerCostPerHour;
        this.quantity = hoursQuantity;
        this.id = workerId;
    }
    
    amountByQuantity () {
        return this.cost * this.quantity;
    }
}