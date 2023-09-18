const arr=[1,2,3,4,"C++","JAVA","Javascript"]

for (const element in arr) {
    //console.log(arr[element]);
}

const str="Hello, World"

for(let word in str){

    //console.log(str[word]);
    if(str[word]==" " || str[word]==","){
        continue;
    }
    console.log(str[word]);
}

