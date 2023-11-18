// Custom filter method-01
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Custom find method-the second
Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
};

// Custom reduce method
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
};

// okay-this is an example:
let numbers = [1, 2, 3, 4, 5];

// Using myFilter-example
let filtered = numbers.myFilter(function(item) {
    return item > 2;
});
console.log(filtered); // [3, 4, 5]

// Using myFind
let found = numbers.myFind(function(item) {
    return item > 2;
});
console.log(found); //output== 3

// Using myReduce
let reduced = numbers.myReduce(function(total, currentValue) {
    return total + currentValue;
}, 0);
console.log(reduced); // 15
