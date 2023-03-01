const numbers =[2,4,6,3];



function getItDouble(){
    const output = [];
    for(const number of numbers){
    const doubled = doubleIt(number);
    output.push(doubled);
}
return output;

}

function doubleIt(num){
    return num*2;
}

const result =getItDouble(numbers);
console.log(result);

const doubITAgain =num=>num*2;

const fiveTimes = [1,2,3,4,5].map(x=>x*5);
console.log(fiveTimes);
