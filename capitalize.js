function capitalize(word) {
    if(typeof word !=='string'){
        throw 'wrong input'
    }
    return word[0].toUpperCase() + word.slice(1,word.length);
  }
  
  module.exports = capitalize;