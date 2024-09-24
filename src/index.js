export function capitalize (str){
    if (str.length === 0) return '';
return str[0].toUpperCase() + str.slice(1

);
}

export function reversestring(str){
return str.split('').reverse().join('');
}
//export default {capitalize ,reversestring};// es6 export doesnt allow this double function export lets make them named exports

export const calculator={
add: (a,b)=>a+b, 
      // just created the key here for addition within object calculator
sub: (a,b)=>a-b,

multiply:(a,b)=>a*b,

divide:(a,b)=>a/b
}

 export function caesarCipher(str,shift){
const charCodes=[];
for(let i=0; i<str.length;i++ ){
    const char=str[i];
    const code=str.charCodeAt(i);

    if(char.match(/[a-z]/i)){
       if(code>=65 && code<=90){
        charCodes.push((code-65+shift)%26+65);
       }
        else if (code>=97 && code<=122) {
            charCodes.push((code-97+shift)%26+97)
        } 
    }
    else{
        charCodes.push(code);
    }
}
return String.fromCharCode(...charCodes)
}

export function analyzeArray(arr){
    if (arr.length === 0) {
        return {
            average: NaN,
            min: Infinity,
            max: -Infinity,
            length: 0
        };
    }
    const sum=arr.reduce((acc,val)=>acc+val,0)
    const average=sum/arr.length;
    const min=Math.min(...arr);
    const max=Math.max(...arr);
    const length=arr.length;
    return{
        average,
        min,
        max,
        length
    };

}