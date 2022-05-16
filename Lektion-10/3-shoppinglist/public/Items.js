export class Items {
    constructor(list) {
        this.list = list;
    }
    delete(item) {
        this.list.splice(this.list.indexOf(item), 1);
    }
}
