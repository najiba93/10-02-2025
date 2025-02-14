// comparaisons
  

let nb1=123// number valeur === 123
let nb2="123"// string valeur === 123
let nb3=""
// l'operateur de comaraison == signifie "egal a " mais permet d'utiliser que les valeur de deux variables
console.log(nb1==nb2)// true
// l'operateur de comaraison === signifie "strictement egale a"
// il permet de verifier la  valeur et le type
console .log(nb1===nb2) // false nb1 et nb2 ne sont pas egal car de dufferent type ( number et string)
// l'operateur "!= " signiffie different de... en valeur
console.log(nb1 != nb2)// false on demande ici si nb1 et nb2 sont de differente valeur

// l'operateur "!== " signifie strictement different de .... valeur et de type
console.log( nb1 !== nb2) // true ici les variables sont effectivement diffirente


//exercice

let prenom="Nassuf"

// si mon prenom indique dans le promt est egale a let prenom alert disant bonjour sinon alert disant au revoir 


let loginPrenom= prompt('bonjour')
let resultPrompt=loginPrenom.charAt(0).toUpperCase()+loginPrenom.slice(1)
console.log('result',loginPrenom)
if( loginPrenom === prenom){
   alert(" bienvenue")
}else{
    alert('au revoir')
}
