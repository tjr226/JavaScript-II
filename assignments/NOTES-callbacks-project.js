const elements = ['earth', 'wind', 'fire', 'water'];

function showFirst(array, callback) {
    callback(array[0]);
}

showFirst(elements, (firstItem) => {
    console.log(firstItem);    
});

function showLength(list, cb) {
    cb(list.length);
}

showLength(elements, (lengthOfList) => {
    console.log(lengthOfList);
});

elements.forEach((element, index) => {
    console.log(element, index);
});

const newArray = elements.map((el, index) => {
    return `${el} ${index}`;
});

console.log(newArray);
console.log(elements);

// const els = ['pencil', 'notebook', 'backpack', 'textbooks'];

// const newForEach = (list, callBack) => {


//     for (let i = 0; i < list.length; i++) {
//         callBack(list[i], i);
//     }
// }

// const iterator = function(item, index) {
//     console.log(item, index);
// }

// newForEach(elements, iterator);

// newForEach(els, iterator);

// following along with Guided Project

// function higherOrderFunction(num1, num2, callback) {
//     return callback(num1, num2);
// }

// const add = function(num1, num2) {
//     return num1 + num2;
// }

// const subtract = function(num1, num2) {
//     return num1 - num2;
// }

// const multiply = function(num1, num2) {
//     return num1 * num2;
// }

// const divide = function(num1, num2) {
//     return num1 / num2;
// }

// console.log(higherOrderFunction(2,4,add));
// console.log(higherOrderFunction(2,4,subtract));
// console.log(higherOrderFunction(2,4,multiply));
// console.log(higherOrderFunction(2,4,divide));