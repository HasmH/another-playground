/**
 * Generator Function 
 * Can be paused and resume during execution 
 * Can be used for defining custom iterators
 * Iterating over large data without having to load it into memory first
 * async/await implementation
 */

function* generateSequence() {
    yield 1; 
    yield 2;
    yield 3;
}

const generator = generateSequence(); 
console.log(generator.next()); 
console.log(generator.next());
console.log(generator.next());