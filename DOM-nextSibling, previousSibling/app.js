// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first')
const second = first.nextSibling.nextSibling.style.color = 'red'
console.log(second);

const last = document.querySelector('#last')
const third = last.previousSibling.previousSibling.style.color = 'green'
console.log(third);