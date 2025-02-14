/*-------------------------------------les tableux---------------------------*/

// creer un tableau

let tab1=new Array("elament0","element1")

let tab2= Array("elament0","element1")

let tab3=["elament0","element1"] // a prioriser plus clair 

// ****************************declaration d'une liste (tableau)

// tableau simple de nombre
let nombres=[1,2,3,4,5]

// tableau de chaine de caractere 
let fruits=["banane","pomme","orange"]

//tableau micte (different type de donnees)
let mixte=[42,"hello",true,{nom:"alice"},[1,2,3]]

// affichage de tableau
console.log("nombres ;", nombres)
console.log("fruits;", fruits)
console.log("mixte;", mixte)

//**************************acceder aux elements d'un tableau 

console.log("premier fruit :", fruits[0])
console.log("2eme fruit :", fruits[1])
console.log("dernuit fruit :",fruits[fruits.length-1])

console.log("mixte", mixte[0])
console.log("mixte", mixte[3])
console.log("mixte", mixte[4][2])
console.log("mixte", mixte[3].nom)
console.log("mixte", mixte[3]["nom"])


//******** */
//modification de loriginal d'un tableau


//*******modifier un element du tableau */


fruits[0]="fraise"
console.log("fruit modifier",fruits)


// trouver l'index d'un element du tableau
fruits.indexOf("pomme")
console.log(fruits.indexOf("pomme"))


//***************ajouter un elements dans un tableau */

fruits.push("mangue")//ajoute a la fin
console.log("fruit avec mangue",fruits)

fruits.unshift("cerise")// ajoute en premier
console.log(fruits)

fruits.splice(1,0,"clementine")// ajoute en deuxiemnt
console.log(fruits)

let index=fruits.indexOf("pomme")
fruits.splice(index , 1) // supprime pomme
console.log("pomme supprimer",rsult)

fruits.shift() // suprimer 1er element
console.log("supprime 1er elements",fruits)


//****************************supprimer des elements */
fruits.pop()//supprime dernier elements
console.log(fruits)

// modification en creant un nouveau tableau

// extrair une partie du tableau  sans modifier l'original

let nouveauFruits=fruits.slice(1.0)
console.log("new",nouveauFruits)



animals.filter(
    function(animal){
    animal !== "ant"
    }
)
console.log("new")


const ages = [32,33,16,5,17,20,40]
const resultat = ages.filter(
    function checkAdult(parametre){
        return parametre >= 18;
    }
);

console.log("nouveau tableau de age", resultat)
console.log("nouveau tableau de age", resultat)







