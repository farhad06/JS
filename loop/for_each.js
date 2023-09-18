const codingLang=['Javascript','C','C++','Python','R','Java']

codingLang.forEach((lang)=>{
    //console.log(lang);
})

const num=[1,2,3,4,5,6,7,8,9]

const num_greated_5=num.filter((num)=>{
   return num>=5
})

console.log(num_greated_5);

const num_greater_6=[]
num.forEach((num)=>{
    if(num>6){
        num_greater_6.push(num)
    }
})

console.log(num_greater_6);