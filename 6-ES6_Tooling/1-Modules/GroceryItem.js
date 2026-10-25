class GroceryItem {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    display() {
        console.log(`Item: ${this.name}, Quantity: ${this.quantity}`);
    }
}

export { GroceryItem };