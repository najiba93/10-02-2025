/*----------------*LES BOUCLES--------------*/
 
// une boucle permet d'executer un bloc de code plusieur fois, tant que la condition est vrais
// les boucles sont utilisé pour parcourir les tableaux,repeté les actions et automatisé des taches
// boucles WHILE(tant que)
// cette boucle est tres utilisé quand on ne connait pas le nombre de tours de boucles à l'avance
/*let j=1;
while(j<=10){
    // tant que j est inferieur ou égal à 10
 
    document.write("<h1 style='color:red' >je passe par ici "+j+" </h1>")
    j++
    document.write("<h2 style='color:blue' >je passe par ici "+j+" </h2>")
   
}
 
let maxAge=25
let age=NaN // initialisation avec une valeur invalide "not a number"
console.log(typeof age)
// la boucle continue tant que l'age n'est pas un nombre
 
while(isNaN(age)){
 
    age=Number(prompt("indiquez votre age"))
 
    if (isNaN(age)){
        alert("erreur : veuillez ecrire un nombre")
    }
}
 
console.log(age)
if(age <maxAge){
 
    alert("bonne nuit")
 
}else{
 
    alert("bienvenue")
 }*/
 
 // la BOUCLE FOR
 //for a besoin de 3 arguements for (3 arguements)
 for(let i=1;i<=10;i++){
    document.write("<h3 style='color:red'>je passe par là :"+i+"</h3>")
 
 }

 // parcourir un tableau
 let fruits=["pomme","banane","cerise"]

 console.log(fruits[0])
 for(let i=0;i<fruits.length;i++){
    console.log("fruits :",fruits[i])
 }



 const products=[
    {name:"smartphone",price : 500},
    {name:"ordinateur",price : 800},
    {name:"casque",price : 100},
    {name:"casque audio",price : 1000}
 ]
 let html="";// on initialise une variable vide
 for(let i=0 ;i < products.length;i++ ){
    // a chaque interation on ajoute ( +=)une nouvelle div avec la produit correspondant
    html += `<div class="product">
    <$h3> ${products[i].name}</h3>
    <p> prix = ${products[i].price} € </p>
    </div>`
 }
 // apres la boucle html contient maintenent tout le code html genere
 let productList=document.getElementById("product-list")
 productList.innerHTML=html
 // "${}" pour inserer des variables directemt dans des chiane de caractere


