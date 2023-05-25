let person = {
    name: 'hakima',
    occupation: 'web dev',
    hobbies: 'runing',
};
//console.log(person);

let myArray =  {
    0: "h", 
    1: "h", 
    2: "kj",
    length: 3
}
for (let i = 0; i < myArray.length; i += 1){
    console.log(myArray[i])
}
let myObj = {
    name: 'haki',
    city: 'VA',
    age: '20',
};
const keys = Object.keys(myObj);

for (let i = 0; i < keys.length; i++){
    let keyName = keys[i];
    console.log('the key is', keyName);
}

