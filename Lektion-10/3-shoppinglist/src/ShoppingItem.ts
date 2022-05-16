interface hasPrint {
    print(): string
}

// interface hasPrint {
//     add(): void
// }

export class ShoppingItem implements hasPrint{

    // readonly item: string;
    // public amount: number;

    // constructor(i: string, a: number) {
    //     this.item = i;
    //     this.amount = a;
    // }

    constructor(
        readonly item:string,
        public amount:number
    ) {}

    add() {
        this.amount ++
    }
    sub() {
        this.amount --
    }
    print() {
        return `${this.item} x ${this.amount}`
    }

}
