/**
 * @description
 * Write a js program to print out the console the integer numbers from 30 to 300 , 
 * but if that number that is multiples of 7 then print out 'abc', if that number 
 * is multiples of 13 then print out 'xyz'. For those numbers those are multiple 
 * of both 7 and 13 then print out 'a-z' . 
 *  */

function printNumber() {
    for (let i = 30; i <= 300; i++) {
        if (i % 7 === 0 && i % 13 === 0) {
            console.log('a-z')
            continue
        }
        if (i % 7 === 0) {
            console.log('abc')
            continue
        }
        if (i % 13 === 0) {
            console.log('xyz')
            continue
        }
    }
}