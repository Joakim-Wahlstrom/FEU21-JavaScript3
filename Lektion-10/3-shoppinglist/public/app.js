"use strict";
const a = document.querySelector('a');
if (a) {
    console.log(a === null || a === void 0 ? void 0 : a.href);
}
// const item = document.querySelector('#item') as HTMLInputElement
// console.log(item.value)
