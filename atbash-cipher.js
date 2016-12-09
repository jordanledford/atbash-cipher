var atbash = function(string){
  var object = {
    A : Z
  	B : Y
    C : X
    D : W
    E : V
    F : U
    G : T
  	H : S
    I : R
    J : Q
    K : P
    L : O
    M : N
    N : M
    O : L
    P : K
    Q : J
    R : I
    S : H
    T : G
    U : F
    V : E
    W : D
    X : C
    Y : B
    Z : A
  }
  var arrayOfCharacters = string.split()
  console.log(arrayOfCharacters);
  var encoder = function(character){

  }
  var scrambler = function(array){
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

  } else {
    arrayofCharacters.scrambler()
  }
  return arrayOfCharacters.join()
}
