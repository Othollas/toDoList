import { Task, TaskUI, TaskFromLocalStorage, TaskUIFromLocalStorage} from "./class.js"
import { pushTaskInArray, shopping, administrative, repair, other, setToLocalStorage } from "./function.js";

const btnEntry = document.querySelector(".btnEntry");
const newEntry = document.querySelector("input");
const sections = document.querySelectorAll("section");
const onglet = document.querySelectorAll("li");



function choiceCategory() {

    onglet.forEach(li => {
        li.addEventListener("click", () => {

            if (li.className != "selected") {
                onglet.forEach(li => {
                    li.classList.remove("selected");
                })

                li.classList.add("selected");

                sections.forEach(section => {

                    if (section.id == li.innerHTML) {
                        sections.forEach(section => {
                            section.classList.add("hidden");
                        })
                        section.classList.remove("hidden");
                    }
                })
            }
        })
    })
}


choiceCategory();


function addNewTask() {
    let task = newEntry.value;

    if (task == "") {
        alert("le champ ne doit pas etre vide");
        return;
    }

    
    let myTaskUI = new TaskUI(new Task(task));

    let selectedCategory = document.querySelector(".selected").innerHTML;
    let taskContainer = document.querySelector(`#${selectedCategory} .newTask`);

    taskContainer.appendChild(myTaskUI.createTaskElement());
    
    myTaskUI.task.category = selectedCategory;

   
    pushTaskInArray(selectedCategory, myTaskUI);
    setToLocalStorage(selectedCategory)
    newEntry.value = "";

    

}



btnEntry.addEventListener("click", () => {

    addNewTask()

})



function pressEnter() {
    newEntry.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            addNewTask()
        }
    })
}


pressEnter()



/**
 * pour mettre en place un local storage j'ai besoin de 
 * 
 * 1) mettre les taches dans un objet qui recuperera le nom de la tache, la date de creation et la date de fin de la tache.
 *
 * 2) stringifier les objets afin de les inserer dans le localstorage
 * 
 * 3) quand un ajout / suppression se passe, recueprer le local storage, le comparer et ajouter ou supprimer dans le tableau et refaire localstorage
 * 
 * 
 */


function ArrayConsoleLog(){
    console.log(shopping);
    console.log(administrative);
    console.log(repair);
    console.log(other);
}


localStorageToTask()

function localStorageToTask(){
    
    if(localStorage.length != 0){
       let arrays = ["course", "administratif", "reparation", "autre"];
        
       for (let i = 0; i<arrays.length; i++){
        
        
        JSON.parse(localStorage.getItem(arrays[i])).forEach(object=>{
        
              let myTaskUI = new TaskUIFromLocalStorage(new TaskFromLocalStorage(object.task.text, object.task.dateCreated, object.task.dateFinishTask, object.task.category));
              
              let taskContainer = document.querySelector(`#${object.task.category} .newTask`);
          
              taskContainer.appendChild(myTaskUI.createTaskElement(object));
             
              
              switchPushCategory(object)
  
          })

       }
        
    }
    
}


function switchPushCategory(object){
    switch (object.task.category) {
        case 'course':
            shopping.push(object);
           
            break;
        case 'administratif':
            
        administrative.push(object);
            break;

        case 'reparation':
            
        repair.push(object)
            break;

        case 'divers':
            
        other.push(object)
            break;
    }
}


// class AnObject{
    
// }

// let man = new AnObject();

// console.log(man)


// let arrayHandler = {
//     set(target, property, value){
//         if(property === 'length'){
//             console.log(`changement de la taille du tableau. Nouvelle longeur : ${value.text}`);
//             console.log(target)
//         }else{
//             console.log(`Ajout ou modification à l'index ${property} avec la valeur : ${value.text}`)
//         }
//         //Modifie réellment l'élément du tableau
//         target[property] = value;
//         return true;
//     }, 
//     deleteProperty(target, property) {
//         console.log(`Suppression de lélément à l'index ${property}`);
//         return delete target[property]; // supprime rééllement l'élément
//     }
// };

// // maintenant je crée un tableau proxy

// let tache = new Proxy([], arrayHandler);

// tache.push("coucou");

// tache.push(new Task("hello"));

// console.log(tache)

