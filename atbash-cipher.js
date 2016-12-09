var atbash = function(string){
  var schema = [
    {'A' : 'Z'}
  	{'B' : 'Y'}
    {'C' : 'X'}
    {'D' : 'W'}
    {'E' : 'V'}
    {'F' : 'U'}
    {'G' : 'T'}
  	{'H' : 'S'}
    {'I' : 'R'}
    {'J' : 'Q'}
    {'K' : 'P'}
    {'L' : 'O'}
    {'M' : 'N'}
    {'N' : 'M'}
    {'O' : 'L'}
    {'P' : 'K'}
    {'Q' : 'J'}
    {'R' : 'I'}
    {'S' : 'H'}
    {'T' : 'G'}
    {'U' : 'F'}
    {'V' : 'E'}
    {'W' : 'D'}
    {'X' : 'C'}
    {'Y' : 'B'}
    {'Z' : 'A'}
]

  var arrayOfCharacters = string.split()
  var encoder = function(character){
    character.toUpperCase()
    // need to return opposite value in array
    // and also return them each in objects.
  }

  var scrambler = function(array){
    // for each character in array, return the associated value
    // within the schema object
    return array.forEach(encoder)
  }

  var isASentence = function(){
    if(arrayofCharacters.indexOf(".") !== -1){
      return true
    } else {
      return false
    }
  }

  if (arrayOfCharacters.filter(isASentence)){
    // do something sentence related
  } else {
    arrayofCharacters.scrambler()
  }
  // need to add a space every 5 characters
  return arrayOfCharacters.join()

}
