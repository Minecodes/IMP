/**
 * Jumps of the frog (in cm)
 * The frog jumps 5 times in a row
 * This project is from https://scratch.mit.edu/projects/617853204/
 * @type {Array<Number>}
 */
let jumps = [] // All the jumps of the frog
let jump = 0 // The current jump
let longest = 0 // The longest jump
let average = 0 // The average jump

/**
 * The frog's position (in cm)
 */
for (let i = 0; i < 10; i++) {
    jump = Math.floor(Math.random() * 20)
    jumps.push(jump)
    console.log(`The frog jumped ${jump} cm`)
}

/**
 * Calculates the longest jump
 * @returns {Number} The longest jump
 */
jumps.map(currentJump => {
    if (currentJump > longest) {
        longest = currentJump
    }
})

/**
 * Calculates the average jump
 * @returns {Number} The average jump
 */
jumps.map(currentJump => {
    average += currentJump
})
average = Math.floor(average / jumps.length)

console.log(`Jumps: ${jumps}`)
console.log(`Longest jump: ${longest}cm`)
console.log(`Average jump: ${average}cm`)