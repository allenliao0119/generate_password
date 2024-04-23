function generatePassword(options) {
  // define the things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // dummy data
  // const options = {
  //   length: '12',
  //   // lowercase: 'on',
  //   // uppercase: 'on',
  //   // numbers: 'on',
  //   // symbols: 'on',
  //   excludeCharacters: '04'
  // }

  // create a collection to store things user picked up
  let collection = []
  
  if (options.lowercase === 'on') {
    collection = collection.concat([...lowerCaseLetters])
  }

  if (options.uppercase === 'on') {
    collection = collection.concat([...upperCaseLetters])
  }

  if (options.numbers === 'on') {
    collection = collection.concat([...numbers])
  }

  if (options.symbols === 'on') {
    collection = collection.concat([...symbols])
  }

  // remove things user do not want
  if (options.excludeCharacters) {
    collection = collection.filter(
      charactor => !options.excludeCharacters.includes(charactor))
  }

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid charactor in your selection.'
  }

  // draw charactor from collection ramdonly to generate password
  let password = ''
  for(let i = 0; i < options.length; i++) {
    password += collection[Math.floor(Math.random() * collection.length)]
  }
  
  // return password
  return password
}

module.exports = generatePassword