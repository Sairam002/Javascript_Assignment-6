//Javascript code to insert a "-" between two even numbers.

let number = 25468;
number = number.toString();

let i = 0;
while( i < number.length){
    if(number[i] % 2 === 0 && number[i+1] % 2 === 0){
        if( i+1 === number.length){
            continue;
        }else{
            number = number.slice(0, i+1)+ `-` + number.slice(i+1);
            i = i+1;
        }
    }
    i++;
}

console.log(number);