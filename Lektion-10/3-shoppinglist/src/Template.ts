import { ShoppingItem } from "./ShoppingItem.js";
import {items} from './app.js'

export class Template {
    constructor(private container: HTMLUListElement) {}

    render(item: ShoppingItem) {
        const li = document.createElement('li')
        li.className = 'p-2 bg-light d-flex justify-content-between align-items-center rounded mb-2'

        const p = document.createElement('p');
        p.className = 'm-0 h3';
        p.innerText = item.print();

        const buttons = document.createElement('div');

        const plusBtn = document.createElement('button');
        plusBtn.className = 'btn btn-dark btn-sm fixed';
        plusBtn.innerText = '+';
        plusBtn.addEventListener('click', () => {
            item.add()
            p.innerText = item.print();
        })

        const minusBtn = document.createElement('button');
        minusBtn.className = 'btn btn-dark btn-sm fixed ms-1';
        minusBtn.innerText = '-';
        minusBtn.addEventListener('click', () => {
            item.sub()
            p.innerText = item.print();
        })

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm fixed ms-1';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.addEventListener('click', () => {
            li.remove()
            items.delete(item)
        })


        buttons.append(plusBtn, minusBtn, deleteBtn);
        li.append(p, buttons);
        this.container.append(li)

    }

}