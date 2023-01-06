//Javascript code to find the largest number in the given array


let array =[3,45,6,7,23,5,7,8];

let modifiedArray = [];

function find_largest(number){

    for(let i =0; i < array.length; i++){
        let isPresent = modifiedArray.includes(array[i]);
        if( isPresent === true){
            continue;
        }else{
            modifiedArray.push(array[i]);
        }
    }

    modifiedArray = modifiedArray.sort(function(a,b){ return a-b});
    return modifiedArray[number-1];
}

let output = find_largest(3);
console.log(output);