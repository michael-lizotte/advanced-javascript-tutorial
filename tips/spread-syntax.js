const pikachu = { name : 'Pikachu 🐯' }
const stats = { hp : 40, attack : 60, defense : 45 }
let pokemon = ['Arbok', 'Raichu', 'Sandshrew']

'Bad Code 💩'

pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')

'Good Code ✅'

const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, { hp : 45 })

const lvl0_2 = { ...pikachu, ...stats }
const lvl1_2 = { ...pikachu, hp : 45 }

pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']
pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle', ]