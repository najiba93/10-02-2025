//dyntaxe de base
// commentaire sur une linge avec 2 "//"
/*commentaire sur plusieurs ligne
commentaire sur plusieurs ligne
 */
// - 1 : declarer une variable en js 
// en js il y a deux variable let et const
// pour declarer une variable :
let nom;
// --2 affecter une valeur a une variable
nom="abdlelkarim"
let ville="paris"// on declare une variable et on lui affecte une valeur en meme temps.
console.log(ville)
ville="londre"
console.log(ville);
// avec une variable const on doit la declarer et lui affecter une valeur sinon une erreur
// const prenom; une erreur s'affiche
const prenom= "moussa"
console.log(prenom);
//on ne peut pas donner une autre valeur a une variable const une erreur s'affichra dans la console
//prenom="ousman"---> erreur
//--03 afficher une boite de dialogue
//alert("je suis une boite de dialogue")
//--04 afficher dans la console avec console.log()
console.log("const bla bla bla prenom:", prenom);


/*-------------------------------------les type de variables---------------------------------------------- */

//--1 les chaines de caracteres (string)
//une string est entourer de guillement obligatoirement
let vacances="2017"; 
let destination="Pantin";

//--2 les nombre entier (integer === int (number))
//pas de guillements
let annee =2017 
// --3 les nombres decimaux avec "." (float)
// sans guillemet
let nombre_a_vigule=5.32;
//3 les booleens true et false
let booleans_false=false
let booleens_true=true
// -- 5 typeof premet de connaitre le type de la variable 
console.log("annee :",annee)
console.log("type de annee :", typeof annee)
console.log("boolean :", typeof booleans_false)
console.log("type de vacances :",typeof vacances)
console.log("vacances en int (number)" , parseInt(vacances))
// string to number
let vacances_numder=parseInt(vacances)
// number ou boolean to string
console.log(" vaccances_number to string", 
    vacances_number.toString())
    consolelog("boolean to string : ",booleans_false.toString())
    // string to float
    let unChiffre= "3.45"
    console.log("string to number", parseInt(unChiffre))//3 ne prend pas  la decimal
    console.log("string to float", parseFloat(unChiffre))//3.45





