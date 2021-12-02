const { readFileSync } = require('fs')

const input = readFileSync('input.txt', 'utf-8').split('\n')

const submarine = {
  horizontalPosition: 0,
  depthDown: 0,
  depthUp: 0
}

const commandTranslate = {
  forward: 'horizontalPosition',
  up: 'depthUp',
  down: 'depthDown'
}

const finalSubmarine = input.reduce((lastSubmarine, currentCommand) => {
  const [type, value] = currentCommand.split(' ')
  return {
    ...lastSubmarine,
    [commandTranslate[type]]: lastSubmarine[commandTranslate[type]] + parseInt(value, 10)
  }
}, submarine)

console.log(`Day 2 - part 1: ${finalSubmarine.horizontalPosition * (finalSubmarine.depthDown - finalSubmarine.depthUp)}`)