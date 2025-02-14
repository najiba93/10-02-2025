/*----------------la concatenation-------------------------*/

const number=2055,mois=12,semaine=7
let year,month,week
year=2025
month="02"
week="lundi"
console.log("const number : ",number)
console.log( "type de const number :",typeof number)
// addition de deux number 
const resultat= number + mois
// mais si il y a un number puis un string les deux variable sont cote a cote. 
const resultat02= year + month
console.log("resultat de year et month:", resultat02)


console.log(resultat)
console.log(resultat02)// resultat02 est in string
const lundi="lundi";
const suiteDePhrase="est une journee"
const magnifique="magnifique"


console.log("le resultat de la phrase : ",resultat_phrase + " ")

console.log("<h1>" + resultat_phrase + "</h1>" )

console.log("le resultat de la phrase : ",resultat_phrase)
//contatenez ces 4 variables dans un nouvelle variable et affichez cette nouvelle variable dans un console log
const partie1="nous sommes le"// string
const partie2=10// nuber
const partie3="du mois de"//string
const partie4="fevrier"//string
const boite=partie1+" " + partie2 +" " + partie3+ " "+partie4
console.log("le resultat de la phrase :",boite)




