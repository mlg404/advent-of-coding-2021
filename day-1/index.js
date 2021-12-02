const { readFileSync } = require('fs')

const input = readFileSync('input.txt', 'utf-8').split('\n')

const getIncreases = (input) => {
  let increases = 0
  const result = input.reduce((a, b) => {
    if (parseInt(b, 10) > parseInt(a, 10)) {
      increases++
    }
    return b
  }, input[0])
  return increases
}
console.log(`Part 1 - ${getIncreases(input)}`)


const sums = input.map((value, index, array) => parseInt(value, 10) + parseInt(array[index + 1], 10) + parseInt(array[index + 2], 10))
console.log(`Part 2 - ${getIncreases(sums)}`)

// const createdStructure = input.map((inputValue) => ({ [inputValue]: [] }))

// const fillStructure = (start) => createdStructure.forEach(structureElement => )
// console.log(createdStructure)