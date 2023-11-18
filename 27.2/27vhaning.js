function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === 'string')) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject('Error: Not all items in the array are strings!');
        }
    });
}

function sortWords(words) {
    return new Promise((resolve) => {
        resolve(words.sort());
    });
}

// random word array test
makeAllCaps(['apple', 'pear', 'banana', 'melon'])
    .then(sortWords)
    .then(result => console.log('Sorted words:', result))
    .catch(error => console.log(error));

//  array + non-string item
makeAllCaps(['apple', 'pear', 3, 'melon'])
    .then(sortWords)
    .then(result => console.log('Sorted words:', result))
    .catch(error => console.log(error));
