// interface hasPrint {
//     add(): void
// }
export class ShoppingItem {
    // readonly item: string;
    // public amount: number;
    // constructor(i: string, a: number) {
    //     this.item = i;
    //     this.amount = a;
    // }
    constructor(item, amount) {
        this.item = item;
        this.amount = amount;
    }
    add() {
        this.amount++;
    }
    sub() {
        this.amount--;
    }
    print() {
        return `${this.item} x ${this.amount}`;
    }
}
