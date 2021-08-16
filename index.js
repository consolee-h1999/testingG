function greet(){
    let arrayNum = [4,5,0,6,7,8,6,5];
    // sum = 0;
    // for (let i = 0; i < arrayNum.length; i++) {
    //     sum += arrayNum[i];
    // }


    // reduces duplicates
    // unique = arrayNum.filter((v, i, a) => a.indexOf(v) === i); 
    

    // same thing
    // return [...new Set(arrayNum)];


    // actually gives distinct values
    // return arrayNum.sort().filter((item,i)=>!(arrayNum[i] == arrayNum[i+1] || arrayNum[i-1]==arrayNum[i]));


// using reduce array to reduce all elements in array into a singular value
    const sum = arrayNum.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)

    return sum

}

console.log('Sum is ' + greet());
