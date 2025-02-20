/*---------manipulation du dom ------------------*/

// 1. selectionne des elements

const titre=document.getElementById(`titre`) // selectionner un id
const paragraphe=document.getElementsByTagName(`p`) // selectionner une balise
const getElementclass=document.getElementsByClassName ("ma-classe") // selectionne la premiere class qu'il trouve avec ce nom
const premiereParagraphe=document.querySelector("p") // sectionne le 1er paragraphe
const unId=document.querySelector("#monId") //selecyionne id
const uneclass=document.querySelector(".uneClass")
const allParagraphe=document.querySelectorAll("p")// selectione tous les paragraphe
const toutesClass=document.querySelectorAll(".ma-classe") // section tous les classe ma-classe


// 2 modification  du conten
if(titre){
    titre.textContent="nouveau texte"// change le texte de titre
    titre.innerHTML="<span>titre</span>"// modifier le HTML on peut ajouter des balises
}
//3 modification de style

if(titre){
    titre.style.color="blue"
    titre.style.fontSize="50px"
    titre.style.padding="10px"

}

// 4 gestion de class  en CSS

titre.classList.add("ajout-de-class")// ajouter une class a un element du DOM
titre.classList.remove("supprimer-ma-class")// supprimer une class
titre.classList.toggle("ma-class2") // ajoute une class si , ou supprime la class si presente

// 5 creation et insertion 
const newParagraphe=document.createElement("p")// creation d'un balise p
newParagraphe.textContent="ceci est un paragphe ajoute par js"
text.appendChild(newParagraphe)
newParagraphe.style.color="red"
newParagraphe.classList.add("ajout-class-js")

//exo

// selectionner id text2 dans le fichier html et le mettre dans une variable
const text2=document.querySelector("#text2")


// creer une h1 en ajoutant un titre :"titre2" que sera l'enfant de text2
const enfanTitre2=document.createElement("h1")
enfanTitre2.textContent="titre2"
text2.appendChild(enfanTitre2)
enfanTitre2.classList.add("ajout-class-js")

// ajouter une class au h1 et modifier son css via la balise style dans fichier css

//******************************6 evenements en js ************ */

// les evenements en js permettent d'interagir avec les actions ( clic, saisie, defillement)
//clique : quand un element est clique
// mouseover : quand la souris passe sur un clique
// scroll : quand on souris passe sur un elements
// scroll : quand on defile sur la page
// keydown : quand  on touche un touche du clavier
const button=document.querySelector(".button")
function alertClick(){
    button.style.color="red"
}

function leaveMouse(){
    setTimeout(function(){
        button.style.fontSize=`2px`
    },"2000"); // delait quand la fonction commencera 2seconde
}
