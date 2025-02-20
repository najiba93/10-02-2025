const button3=document.querySelector("#button3")
const paraChange=document.querySelector("#paraChange")
const clos=document.querySelector(".clos")




function modificationText(){
    paraChange.textContent(`mon texte a change l\'apres`)
    paraChange.style.fontSize="20px"
}

const changeColor=document.querySelector("#changeColor")

button3.addEventListener("click", function() {
    div1.classList.toggle("block")
   
});

 


 const utilisateurs = ["alice","bob","charlie","david"]
for(let i=0;i<utilisateurs.length;i++){
    const li=document.createElement("li")
    console.log(utilisateurs[i]);
    li.textContent=utilisateurs[i]
    li.addEventListener("click",function(){
        alert("Utilisateur selectionne : " + utilisateurs[i])
        li.style.backgroundColor="red"
    })

    listeUtilisateurs.appendChild(li);
}
const lesnom= ["nom", "nom2","nom3","nom4"]
 for ( let i=2;i<lesnom.length; i++){
    const p=document.createElement("p")
    console.log(lesnom[i])
 listeUt
 }




