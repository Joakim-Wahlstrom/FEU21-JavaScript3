// const a = document.querySelector('a')
// if(a) {
//     console.log(a?.href)
// }
// console.log(item.value)
import { Items } from "./Items.js";
import { ShoppingItem } from "./ShoppingItem.js";
import { Template } from "./Template.js";
const item = document.querySelector('#item');
const amount = document.querySelector('#amount');
const form = document.querySelector('#form');
const ul = document.querySelector('#output');
const list = new Template(ul);
export const items = new Items([]);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const _item = new ShoppingItem(item.value, amount.valueAsNumber);
    items.list.push(_item);
});
