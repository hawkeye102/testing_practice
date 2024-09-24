import {capitalize,reversestring,calculator,caesarCipher,analyzeArray} from '../src/index';// Ensure the import path is correct es6 import

describe('capitalize', () => {
    test('capitalize the first letter of a lowercase word', () => {
        expect(capitalize('born')).toBe('Born'); // Fixed toBe syntax
    });

    test('capitalize the only letter of a lowercase word', () => {
        expect(capitalize ('o')).toBe('O'); // Fixed toBe syntax
    });

    test('work with the empty string', () => {
        expect(capitalize('')).toBe(''); // Fixed toBe syntax
    });

    test('if already capitalized', () => {
        expect(capitalize('Born')).toBe('Born'); // Fixed toBe syntax
    });
});
 


describe('reversestring', () => {
    test('reverse the entered value', () => {
        expect(reversestring('born')).toBe('nrob'); // Fixed toBe syntax
    });

    test('reverse if the the single char is there', () => {
        expect(reversestring ('o')).toBe('o'); // Fixed toBe syntax
    });

    test('work with the empty string', () => {
        expect(reversestring('')).toBe(''); // Fixed toBe syntax
    });

    test('reverse with punctuations as', () => {
        expect(reversestring('born!')).toBe('!nrob'); // Fixed toBe syntax
    });
});


describe('calculator', () => {
    test('calculates the addition', () => {
        expect(calculator.add(9,3)).toBe(12); // Fixed toBe syntax
    });

    test('calculates the substraction', () => {
        expect(calculator.sub(6,4)).toBe(2); // Fixed toBe syntax
    });

    test('calculates the multiplication', () => {
        expect(calculator.multiply(3,8)).toBe(24); // Fixed toBe syntax
    });

    test('calculates the division', () => {
        expect(calculator.divide(6,2)).toBe(3); // Fixed toBe syntax// just provide numbers not the operator
    });
});


describe('caesarCipher', () => {
    test('shift the letter through shift factor', () => {
        expect(caesarCipher('hello world',3)).toBe('khoor zruog'); // Fixed toBe syntax
    });

    test('wraps z to a', () => {
        expect(caesarCipher('z',1)).toBe('a'); // Fixed toBe syntax
    });

    test('keeps the same case', () => {
        expect(caesarCipher('Hello world',3)).toBe('Khoor zruog'); // Fixed toBe syntax
    });

    test('handles the punctuation marks ', () => {
        expect(caesarCipher('Hello world!',3)).toBe('Khoor zruog!'); // Fixed toBe syntax// just provide numbers not the operator
    });
});


describe('analyzeArray', () => {
    test('calculates the average, min ,max,length', () => {
        expect(analyzeArray([2,3,4,5,6])).toEqual({
            average:4,
            min:2,
            max:6,
            length:5
        }); // Fixed toBe syntax
    })

    test('calculates the average, min ,max,lenght, with negative number', () => {
        expect(analyzeArray([-1,0,-2,-3,-4])).toEqual({
            average:-2,
            min:-4,
            max:0,
            length:5
        })

    })
    

        test('for no element', () => {
        expect(analyzeArray([])).toEqual({
            average:NaN,
            min:Infinity,
            max:-Infinity,
            length:0,
        })
    })

    
})
