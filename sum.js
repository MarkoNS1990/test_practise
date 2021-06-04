function sum(word) {
    if(typeof word !=='string'){
        throw new TypeError()
    }
    return word[0].toUpperCase() + word.slice(1,word.length);
  }
  
  module.exports = sum;