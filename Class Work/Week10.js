// Write a function buildArray that takes two Numbers, and returns
//an Array filled with all numbers between the given
//number: buildArray(5, 10) should return [5, 6, 7, 8, 9, 10]

function buildArray(n1, n2) {
    let arr = [];
    for (let i = n1; i <= n2; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(buildArray(5, 10));


const buildArray2 = function (n1, n2) {
    let arr = [];
    for (let i = n1; i <= n2; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(buildArray2(5, 10));

// arrow func

const buildArray3 =  (n1, n2)=> {
    let arr = [];
    for (let i = n1; i <= n2; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(buildArray3(5, 10));

//2. Write a function checkAges that takes two arguments: an Array of ages
//(Number); and a cut-off age (Number). Your function should return true if all of
//the ages in the Array are at least as old as the cut-off age: checkAges([16,
//18, 22, 32, 56], 19) should return false and checkAges([16, 18, 22, 32,
//56], 6) should return true

function checkAges(ages, cutoffAge) {
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < cutoffAge) {
            return false;
        }
    }
    return true;
}

console.log(checkAges(16, 18, 22, 32, 56), 6);

//3. Write a function containsBadWord that takes two
//arguments: badWords (an Array of words that can’t be used),
//and userName (a String entered by the user). Check to see if any of the
//words in badWords are contained within userName. Return the badWord that
//was found, or null if none are found.

const badWords = ['fart', 'cum', 'stupid'];

function badWord(badWords, userName) {
    for (let word of badWords) {
        if (userName.includes(word)) 
            {
            return word;
        }
    }
    return null;
}

const userName1 = 'Alexfart';
const userName2 = 'Alexander';
const userName3 = 'Alexandercum';
const userName4 = 'stupidfart29';

console.log(badWord(badWords, userName1)); 
console.log(badWord(badWords, userName2)); 
console.log(badWord(badWords, userName3)); 
console.log(badWord(badWords, userName4)); 


//4. Write a function that takes a String and checks whether or not it begins with
//one of "Mr.", "Mrs.", or "Ms.". Return true if it does, otherwise false.

function checkTitle(name) {
    const titles = ["Mr.", "Mrs.", "Ms."];
    for (let status of titles) {
        if (name.startsWith(status)) 
            {
            return true;
        }
    }
    return false;
}

console.log(checkTitle("Mr. McCoy"));    
console.log(checkTitle("Mrs. Smith"));  
console.log(checkTitle("Dr. Phil"));   