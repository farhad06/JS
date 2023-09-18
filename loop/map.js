const num=[1,2,3,4,5,6,7,8,9,10]

//channing
const newNum=num.map((num)=>num*10).map((num)=>num+5).map((num)=>num/5).filter((num)=>num>=15)

console.log(newNum);