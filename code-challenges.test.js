// ASSESSMENT 3: Coding Practical Questions with Jest
//
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// --- > ::STUDENT NOTES:: This question confused me at first because this problem was not supplied with variables like it states in the test question/statement, only suggested example inputs? With that said, I bypassed this statement and proceeded to make the test work as I suspect I am supposed to.

describe("sequencer", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        expect(sequencer(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(sequencer(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


        // JEST "GOOD" TEST FAIL
        // -------------------------
        // FAIL./ code - challenges.test.js
        // sequencer
        //     ✕ takes in a number(greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence(7 ms)

        //   ● sequencer › takes in a number(greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

        // ReferenceError: sequencer is not defined



// b) Create the function that makes the test pass.

// PSEUDO CODE
// ----------------------
// Create a FUNCTION called SEQUENCER that takes in a NUMBER > 2
// Create a VARIABLE to hold an ARRAY of first 2 values of fibonacci sequence
// Per established rules of the fibonacci sequesnce, ITERATE the number of times in the paramaters argument
// Fill the newly created variable with the fibonacci sequence via the PUSH METHOD.


const sequencer = (number) => {
    let array = [1, 1]
    for (let i = 0; i < number - 2; i++) {
        if (number > 2) {
            array.push(array[i] + array[i + 1])
        }
    }
    return array
}

        // JEST "GOOD" TEST PASS
        // -------------------------
            // PASS./ code - challenges.test.js
            // sequencer
            //     ✓ takes in a number(greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence(4 ms)




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddNumberSorter", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(oddNumberSorter(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddNumberSorter(fullArr2)).toEqual([-823, 7, 23])
    })
})

// Expected output: [-9, 7, 9, 199]
// Expected output: [-823, 7, 23]


        // JEST "GOOD" TEST FAIL
        // -------------------------
        // FAIL./ code - challenges.test.js
        // oddNumberSorter
        //     ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest(1 ms)

        //   ● oddNumberSorter › takes in an array and returns a new array of only odd numbers sorted from least to greatest

        // ReferenceError: oddNumberSorter is not defined



// b) Create the function that makes the test pass.


// PSEUDO CODE
// ----------------------
// Create a FUNCTION called oddNumberSorter that takes in an ARRAY
// Return the supplied array and FILTER it based on TYPEOF NUMBER and whether it is ODD NUMBER
// Return the array and SORT it least to greatest


const oddNumberSorter = (array) => {
    return array.filter(value => {
        if (value % 2 !== 0 && typeof (value) === "number") {
            return array
        }
    }).sort((alpha, bravo) => alpha - bravo)
}


        // JEST "GOOD" TEST PASS
        // -------------------------
        // PASS./ code - challenges.test.js
        // oddNumberSorter
        //     ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest(3 ms)



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arrayAccumulator", () => {
const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        expect(arrayAccumulator(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(arrayAccumulator(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(arrayAccumulator(numbersToAdd3)).toEqual([])
    })
})

// Excpected output: [2, 6, 51, 60]
// Expected output: [0, 7, -1, 11]
// Expected output: []


        // JEST "GOOD" TEST FAIL
        // -------------------------
        // FAIL./ code - challenges.test.js
        // arrayAccumulator
        //     ✕ takes in an array and returns an array of the accumulating sum.An empty array should return an empty array(1 ms)

        // ● arrayAccumulator › takes in an array and returns an array of the accumulating sum.An empty array should return an empty array

        // ReferenceError: arrayAccumulator is not defined


// b) Create the function that makes the test pass.


// PSEUDO CODE
// ----------------------
// Create a FUNCTION that takes in an ARRAY
// Establish VARIABLE to hold the NEW array
// Return the array and MAP over it while adding each value and adding it to the NEW array
// IF an empty array is passed in, simpply return the empty NEW array

const arrayAccumulator = (array) => {
    let newArray = []
    return array.map((value, index) => {
        if (index > 0) {
            return newArray = value + newArray
        } else {
            return newArray = value
        }
    })
}

        // JEST "GOOD" TEST PASS
        // -------------------------
        // PASS./ code - challenges.test.js
        // arrayAccumulator
        //     ✓ takes in an array and returns an array of the accumulating sum.An empty array should return an empty array(4 ms)
