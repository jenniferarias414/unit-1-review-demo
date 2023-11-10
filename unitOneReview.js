// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
let dog = 'Stacy'
const isCute = true
let salary = 300

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding language of your choice. 
*/

//CODE HERE
let codingLanguage = ['javascript', 'react', 'swift', 'java']

/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

//CODE HERE
console.log(codingLanguage[2])

/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

//CODE HERE
let codingLanguage2 = codingLanguage.slice()

/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE

codingLanguage2.push('Python')

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
instruments.pop() //remove the last item from array

/* 
Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
instruments.shift() //remove first item
console.log(instruments)

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift('guitar')
console.log(instruments)
/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2, 1, 'glockenspeil')
// index # to start, # items to remove, items to replace with

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
// if(/* conditional goes here */) {
//     //this runs if the conditional returns true
// }
if(num % 2 === 0) {
    console.log(num)
} else {
    console.log('This is not even')
}

if(isCute) {
    console.log('pet the dog')
} else {
    console.log('pet dog anyway, its the law')
} // automatically checking for T/F, since isCute is set as T, will run first code


// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE

if(score <= 10) {
    console.log('failed')
} else if (score > 10 && score <= 40) {
    console.log('C')
} else if (score > 40 && score <= 70) {
    console.log('B')
} else if (score > 70) {
    console.log('A-mazing')
}


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0
for(let i = 0; i < price.length; i++) {
    // starting point of loop; up until length of array in case any changes occur (don't put hard number); increase each loop by 1
    totalPrice += price[i]
}
console.log(totalPrice)

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/
let average = totalPrice / price.length

console.log("Average Price: ", average)


// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for(let i = 0; i < colors.length; i++) {
    // let col = colors[i]
    // if(col === 'red')...

    if(colors[i] === 'red') {
        console.log('apple')
    } else if (colors[i] === 'green') {
        console.log('melon')
    } else if (colors[i] === 'yellow') {
        console.log('banana')
    }
}

// switch(colors[i]) {
//     case 'red':
//         console.log('apple')
//         break
//     case 'green':
//         console.log('melon')
//         break
//     case 'yellow':
//         console.log('banana')
//         break
//     default:
//         console.log('idk what you wrote there...')
// }

// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC: (fixed steps on repeat)
    -- planning (plan everything about it: probs, look like, idea...)
    -- Analysis of Requirements (what you need to make it work: softwares, langs, services...)
    -- Design (visual/folder structure-organization)
    -- Implementation (building process)
    -- Testing (code works in every scenerio) & Integration (getting it online rdy for users to work with, go live)
    -- Maintain (doing all steps on repeat prn)
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git (local to computer, command-line-based)
        -- github (place to store/save it)

        -- git init (initialize a repo in current folder youre working in)
        -- git clone (copy contents from github to device)
        -- git status (check current status of repo: any changes/added/deletes)
        -- git add (adds all changes to next commit message)
        -- git commit (create a new version in hx of this folder: always comes with a message -m "...")
             (^all local^)
        -- git push (pushes to github)
    - How to push git to github (pinned to discord)
*/

