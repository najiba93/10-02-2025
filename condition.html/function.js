/*-------------------------------fonction-------------------------------- */

// une fonction en javascript est un bloc de code reutilisable qui execute une tache sepecifique
// elle oeut recoir des parametres, effectuer des operation et retourner un resultat
// on peut declarer une fonction en utilisant les mot cle "function"

function direBonjour(){
    console.log("bonjour")
}
//ici direBonjour rst une fonction qui affich bonjour dans la console 
// pour execute cette fonction on doit l'appeler, na  pas oublier les parentheses
direBonjour() // afffiche "bonjour dans la console"


function consol(message){
    console.log(message)
}
consol("j'ecris mon message")
let b=12
consol(typeof b)

let c=3
let d=4



function fois2(n){
    return n*2
}
console.log(fois2(c))
console.log(fois2(d))
consol(fois2(d))
// ecrire une fonction reutilisable avec parametre qui acris une texte dans le dom avec write

let text = "je suis le text"
let text2="je suis le 2eme texte"

function textDom(text){
   document.write( "<h1>"+ text +"</h1>")
}
textDom(text,"div","result","border:1px solid black")
textDom(text2,"h1","resul","color:red")
   // function avec return
// une foction peut retourner une valeur avec return la fonction s'arrete et tout le code en dessous ne sera pas lu

 
function addition(a, b){
    return
    console.log(a , b) 
}
 
console.log(addition(5, 2))
const text4="je suis fatigue"
majFirst(text4)



// 📂 Manipulation des chaînes de caractères (String)
// indexOf(substr) - Trouve l'index de la première occurrence d'une sous-chaîne.
console.log("Bonjour".indexOf("o")); // 1
 
// lastIndexOf(substr) - Trouve la dernière occurrence d'une sous-chaîne.
console.log("Bonjour".lastIndexOf("o")); // 4
 
// includes(substr) - Vérifie si une chaîne contient une sous-chaîne.
console.log("Bonjour".includes("jour")); // true
 
// startsWith(substr) - Vérifie si une chaîne commence par une sous-chaîne.
console.log("Bonjour".startsWith("Bon")); // true
 
// endsWith(substr) - Vérifie si une chaîne se termine par une sous-chaîne.
console.log("Bonjour".endsWith("our")); // true
 
// slice(start, end) - Extrait une partie d’une chaîne.
console.log("Bonjour".slice(1, 4)); // "onj"
 
// substring(start, end) - Similaire à slice, mais ne prend pas d’index négatif.
console.log("Bonjour".substring(1, 4)); // "onj"
 
// replace(old, new) - Remplace une sous-chaîne par une autre.
console.log("Bonjour".replace("jour", "soir")); // "Bonsoir"
 
// toUpperCase() - Convertit une chaîne en majuscules.
console.log("bonjour".toUpperCase()); // "BONJOUR"
 
// toLowerCase() - Convertit une chaîne en minuscules.
console.log("BONJOUR".toLowerCase()); // "bonjour"
 
// trim() - Supprime les espaces autour d’une chaîne.
console.log("  Bonjour  ".trim()); // "Bonjour"
 
// split(separator) - Sépare une chaîne en tableau selon un séparateur.
console.log("Bonjour le monde".split(" ")); // ["Bonjour", "le", "monde"]
 
// 📌 Manipulation des tableaux (Array)
// indexOf(value) - Trouve l'index d’un élément dans un tableau.
console.log([10, 20, 30].indexOf(20)); // 1




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




function plusOuMoin(n){
    if(!isNaN(n)){
        console.error("il y avoir un nobre")
    return
}else if(n < 0){
    return "nomber negatif"
}else if(n===0){
    return"nombre null"
}else{
    return"nobre positif"
}
}

plusOuMoin(2)





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



let stock=prompt("ecris unchiffre")
console.log(" reponse peompt avec variable", plusOuMoin(stock))



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





