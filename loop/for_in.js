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
    //console.log(str[word]);
}

const map=new Map()

map.set('IN','India')
map.set('USA','United State of America')
map.set('UK','United Kingdom')
map.set('BN','Bangadesh')

for(const [key,value] of map){
    //console.log(key,':-',value);
}

//console.log(map);

const lang={
    js:"Javascript",
    cpp:"C++",
    py:"Python",
    rb:"Ruby"
}

for(const key in lang){
    console.log(`${key} is short name for ${lang[key]}`);
}