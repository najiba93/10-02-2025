/*-----------------les conditions-----------------------------*/

// en javascript une condtion permet d'executer un bloc de code seulement si certaines conditions sont vrai ( true)

// structure avec "if"
/*nb1=49
if(nb1<50){
    // si la condition dans les parenttheses est vrai alors le code a l'interieur des accolades s'execute
    alert("je suis inferieur a 50")
}
if(true){
    //si condition est vrai 
    //le code s'execute
}else{
    //si la condtion est fausse 
    // c'est ce code qui s'execute
}
// exemple
let nb2=50
if( nb2 < 50){
    alert("nb2 est inferieur a 50")
}else{
    alert("nb2 est superieur a 50")
}*/
// on va utiliser les condition pour verifier l'age d'un user
// si il a plus de 25 ans alors on lui souhaite bienvenue dans la console
// sinon vous lui dit au revoir dans la console



let maxAge=25


let age= Number(prompt('quel est ton age?'))
console.log(age);
console.log(typeof age);

if( age <= maxAge){
    console.log("souhaite bienvenue")
}else{
    console.log("au revoir")
}

if(isNaN(age)){ // si age n'est pas un number alors le code s'execute
    alert("erreur : donnees invalides")
}else if(age <= maxAge){ // si age est un ombre mais est inferieur a 25 alors ce code s'execute
    alert("rentre chez toi petit")
}else{ // si toutes les conditions au dessus sont fausses alors ce code s'execute
    alert("bienvenue")
}

// switch
// l'nstruction switch est utilise pour remplacer une serie de conditions "if else else if " lorsque l'on doit comparer une valeur a plusieurs cas possible

const jour="samedi"

switch(jour){
    case "lundi":
        console.log("debut de semaine") 
        break

    case "mardi":
    case "mercredi":
            console.log("milieu de semaine")
        break
        case "jeudi":
        case "vendredi":
            console.log("fin de semaine")
        break
        case "samedi":
        case "dimanche":
            console.log("c'est le week-end")
            break
        default:
            console.log("jour inconnu")
}


