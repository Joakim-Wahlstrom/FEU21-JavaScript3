// const a = document.querySelector('a')
// if(a) {
//     console.log(a?.href)
// }
// console.log(item.value)


import { Items } from "./Items.js";
import { ShoppingItem } from "./ShoppingItem.js";
import { Template } from "./Template.js";

const item = document.querySelector('#item') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const form = document.querySelector('#form') as HTMLFormElement;
const ul = document.querySelector('#output') as HTMLUListElement;

const list = new Template(ul)
export const items = new Items([])

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const _item: ShoppingItem = new ShoppingItem(item.value, amount.valueAsNumber)
    items.list.push(_item);
    list.render(_item);
    form.reset();
    console.log(items);
})