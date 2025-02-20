
// exo 1 operation de base sur un tableau
// créer un tableau contenant "pomme""banane" "cerise" "orange"

let fruits=["pomme","banane","cerise","orange"]
 
//ajouter "kiwi" a la fin

fruits.push("kiwi")
console.log(fruits)

// et "ananas" au début

fruits.push("kiwi")
console.log(fruits)
 
// supprimer derbuer élément

fruits.unshift("ananas")
console.log(fruits)

//supprime dernier elements

fruits.pop()
console.log("supprime dernier element",fruits)


// afficher la longeur du tableau
// utliliser les consoles log

console.log("longueur tableau",fruits.length)

//exo 2 recherche dans un tableau
// créer un tableau let nombres = [10,25,38,50]


let nombre=[10,25,45,38,50]
console.log("nombres ;", nombre)
// verifier si le nombre 30 est présent dans le tableau

let contient30=nombre.includes(30)
console.log(contient30)
if(contient30===true){
    console.log("tableau contient bien 30")
}else{
    
        console.log("not 30")
    }


// trouvez l'index de 45

/*let index2=nombre.indexOf(45)
console.log("index de 45:",index2)*/

fruits.indexOf(45)
console.log(fruits.indexOf(45))

// exo3 3 filter un tableau

// créer un tableau contenant 2 5 8 11 14 17

let tab5=[2, 5, 8, 11, 14, 17]

// creer un nouveau tableau contenant des nombre supérieur à 10


const resultat = tab5.filter(
    function checkAdult(parametre){
        return parametre >= 10;
    }
);
console.log(resultat)
console.log(tab5)

//exercice

// creer un tableau utilisateur contenant des sous tableaux [nom, rele,email] comme ceci


let utilisateurs= [
    ["Jean Dupont", "jean.dupont@email.com", "admin"],
    ["Marie Lemoine", "marie.lemoine@email.com", "utilisateur"],
    ["Pierre Durand", "pierre.durand@email.com", "modérateur"]
];


console.log(utilisateurs)

function ajouterUnUser(nom,mail,role){
    utilisateurs.push([nom,mail,role])
    console.log("ajouter")
}
ajouterUnUser("varas","agmail.com","user")
console.log("user",utilisateurs)





// creer une fonction pour ajouter un utlisateur

  
/*function trouverutilisateur(nom) {
    console.log()
    for(let i=0; i <utilisateurs.length;i++){
    let user=utilisateurs[i][1].includes(nom)
    console.log("user",user)
    console.log(utilisateurs[i])

    if(user===true){
        return `non:${utilisateurs[0]},mail :${utilisateurs[1]}role :${utilisateurs[2]}`:
       //return"nom:" + utilisateurs[0] + "mail:" + utilisateurs[1]
    }else{
        return "utilisateur non trouve dens la bas de donne"
    }
}
    }
    console.log(trouverutilisateur("charLie@example.com"))*/




    let utilisateurs = [

    ]
    console.log(utilisateurs)
    function ajouterUnUser(nom,
    
    function afficherUserUnUser(){
        for (let i=0;i< utilisateurs.length;i++){
            console.log( `nom ${utilisateurs[i][0]} , mail${utilisateurs[i][1]},${utilisateurs[i][2]}`)
            console.log ( "concatenation : nom :" +utilisateurs[i][0] + " mail :" + utilisateurs[i][1] + "rol :" + utilisateurs[i][2])

        }
    }
    afficherUser()

    supprimeruser("alice dupont")
    function supprimeruser(nom){
        let index=utilisateurs[0].index(nom) // si nom exitste 
    }
    