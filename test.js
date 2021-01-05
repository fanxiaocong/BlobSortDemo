const Sort = require('./sort')


/*********************** 数组的默认排序 ***********************/ 
/*
let array1 = ['banana', 'cherry', 'apple']
array1.sort()  // [ 'apple', 'banana', 'cherry' ]
 
let array2 = [33, 4, 1111, 222]
array2.sort()  // [ 1111, 222, 33, 4 ]
 
let array3 = [NaN, 10, undefined, null, 'Nc']
array3.sort()  // [ 10, NaN, 'Nc', null, undefined ]
*/
/*********************** 数组的默认排序 ***********************/ 



const person = (first, last, age) => ({ first, last, age })

let people = [
  person('Emmy', 'Yahn', 19),
  person('Lucy', 'Jhon', 27),
  person('Andy', 'Brown', 8),
  person('Robbert', 'Keaven', 36),
  person('Andy', 'Jhon', 31),
  person('Andy', 'Brown', 5)
]

/*********************** 使用比较函数进行排序 ***********************/ 
/*
people.sort((p0, p1) => {
  if (p0.last > p1.last)  return 1
  if (p0.last < p1.last)  return -1
  return 0
})

people.sort((p0, p1) => {
  // 按照 last 升序
  if (p0.last > p1.last)  return 1
  if (p0.last < p1.last)  return -1

  // 如果 last 相同，再按照 first 升序
  if (p0.first > p1.first)  return 1
  if (p0.first < p1.first)  return -1

  return 0
})
*/
/*********************** 使用比较函数进行排序 ***********************/ 


/*********************** 使用排序描述符进行排序 ***********************/ 
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
/*********************** 使用排序描述符进行排序 ***********************/ 