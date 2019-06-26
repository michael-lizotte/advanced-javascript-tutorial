function greet(firstname, lastname, language) {
  language = language || 'EN'

  if (language == 'EN') {
    console.log(`Hello ${firstname} ${lastname}`)
  }

  if (language == 'ES') {
    console.log(`Hola ${firstname} ${lastname}`)
  }
}

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'EN')
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'ES')
}

greetEnglish('John', 'Doe')
greetSpanish('John', 'Doe')