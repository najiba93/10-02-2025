

// Exercice 1 : Somme de deux nombres
// Écrire une fonction somme(a, b) qui prend deux nombres en paramètres et retourne leur somme.
 
// Écrire une fonction max(a, b) qui retourne le plus grand des deux nombres donnés.
 
 
// Exercice 2 : Vérifier si un nombre est positif, négatif ou nul
// Écrire une fonction verifierNombre(n) qui prend un nombre en paramètre et affiche s'il est positif, négatif ou nul.

function plusOuMoin(chiffre){
    if(isNaN(chiffre)){
        console.error("il y avoir un nobre")
    return
}else if(chiffre < 0){
    return "nomber negatif"
}else if(chiffre===0){
    return"nombre null"
}else{
    return"nobre positif"
}
}

console.log("plus ou moin",plusOuMoin(-1))
console.log("plus ou moin",plusOuMoin(3))
console.log("plus ou moin",plusOuMoin(0))
console.log("plus ou moin",plusOuMoin("chaine"))



 
 
 
// Exercice 3 : Vérifier si un nombre est pair ou impair
function pairOuImoair(n){
    if( n %2 === 0){
        return "pair"
    }else{

        return"impaire"

    }
}
console.log(pairOuImoair(2))
console.log(pairOuImoair(3))
console.log(pairOuImoair(43))


// Écrire une fonction pairOuImpair(n) qui retourne "Pair" si n est un nombre pair, sinon "Impair".
 
 
// Exercice 4 : Comparer deux nombres
// Écrire une fonction comparer(a, b) qui prend deux nombres et affiche :
 
// "a est plus grand" si a > b
// "b est plus grand" si b > a
// "Les deux sont égaux" si a === b
 
 
// Exercice 5 : Compter le nombre de voyelles dans une chaîne
// Écrire une fonction compterVoyelles(chaine) qui compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne de caractères.
function compterVoyelles(chaine){
    let voyelles="aeiouyAEIOUY"
    let compteur=0
 
    for(let i=0;i<chaine.length;i++){
console.log(chaine[i])
        if( voyelles.includes(chaine[i])){
            compteur++
        }
    }
 
    return compteur
 
}
console.log("compteur :",compterVoyelles("bonjour les gens"))
 
// Exercice 6 : Calculatrice simple
// Écrire une fonction calculer(a, b, operateur) qui prend deux nombres et un opérateur (+, -, *, /) et retourne le résultat.
 

function calculer (a,b,operateur){
    switch(operateur){
        case "+":
            return a+b
        case "+":
            return a-b
        case "+":
            return a*b
        case"/":
            if(b !== 0){
                return a/b
            }else{
                return "erreur : dividion par zero impossilbe"
            }  
            case "/":
//operateur conditionnel (ternaire) pour simplifier le if et le els
// condition ? si vrai : si faux
 // si b !==0 alors(?) division sinon( : ) 'erreur...

                return b!==0? a/b :"ereue : division par zero impossible"  

        default:
        return"operateur invalide"
    }
}

console.log(calculer(10,5,"+"))
console.log(calculer(10,5,"-"))
console.log(calculer(10,5,"*"))
console.log(calculer(10,5,"/"))
console.log(calculer(10,5,"/"))
 
 
// Exercice 7 : Deviner un animal
// Écrire une fonction animalCri(animal) qui prend un nom d'animal ("chien", "chat", "vache", "oiseau") et retourne le son qu'il fait.
function criAnimals(animal){
    switch(animal){
    case "chien":
        return "ouaf"
    case "chat":
        return"miaou"
        default :
        return"je navais pas fair tous les animaux de la planete !!!"
    }
}
consol(criAnimals("rat"))









function somme(a, b){
    let total = a  + b 
    return total
  
}
 console.log(somme(5,8));


 function max(a, b){
    if(a>b){
        return a
    }else{
        return b
    }   
}
console.log(max(13,9))



function verifier(a){
    if(a>0){
        return positif
    }else if(a>0){
        return négatif
    }else if(a===0){
        return null
}
}

verifier(9)


    





