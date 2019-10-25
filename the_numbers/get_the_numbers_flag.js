let numbers = [16,9,3,15,3,20,6,'{',20,8,5,14,21,13,2,5,18,19,13,1,19,15,14,'}']

let flag = ''
numbers.forEach(num => {
  if(typeof num === 'string') flag += num
  else {
    flag += String.fromCharCode(num + 64)
  }
})

console.log(flag)