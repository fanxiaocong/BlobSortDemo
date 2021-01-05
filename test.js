const Sort = require('./sort')

const person = (first, last, age) => ({ first, last, age })

let people = [
  person('Emmy', 'Yahn', 19),
  person('Lucy', 'Jhon', 27),
  person('Andy', 'Brown', 8),
  person('Robbert', 'Keaven', 36),
  person('Andy', 'Jhon', 31),
  person('Andy', 'Brown', 5)
]


// 按照 last 升序
const sortByLast = Sort.descriptor(item => item.last)
// 按照 first 升序
const sortByFirst = Sort.descriptor(item => item.first)
// 按照 age 降序
const sortByAge = Sort.descriptor(item => item.age, Sort.descendingOrder)
// 依次按照 last 升序、first 升序、age 降序的规则进行排序
const combined = Sort.combine(sortByLast, sortByFirst, sortByAge)

people.sort(combined)
console.log(people)

let arr = [1, 7, 9, 3]
console.log(arr.sort(Sort.descriptor()))