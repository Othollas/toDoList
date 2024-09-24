import { makeDateInOrder, updateTaskObject, shopping, setToLocalStorage, setDeleteArray } from "./function.js";

export class Task {
    constructor(text) {
        this.text = text;
        this.dateCreated = new Date();
        this.dateFinishTask = "";
        this.category = "";
        this.isCompleted = false;
    }

    completeTask() {
        this.isCompleted = true;
    }

    uncompleteTask() {
        this.isCompleted = false;
    }
}


export class TaskUI {
    constructor(task) {
        this.task = task;
    }


    createTaskElement() {
        let newDiv = document.createElement("div");
        newDiv.classList.add('task');

        let checkbox = this.createCheckbox(newDiv);
        newDiv.appendChild(checkbox);

        let textTask = this.createTaskText();
        newDiv.appendChild(textTask);

        let date = this.createTaskDate();
        newDiv.appendChild(date);

        let dateFinishTask = this.createDateFinishTask(newDiv);
        newDiv.appendChild(dateFinishTask);

        let delBtn = this.createDelBtn(newDiv);
        newDiv.appendChild(delBtn);



        return newDiv
    }


    createCheckbox(div) {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = this.task.isCompleted;

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                this.task.completeTask();
                div.classList.add("checked");
            } else {
                this.task.uncompleteTask();
                div.classList.remove("checked");
            }
        });

        return checkbox;
    }

    createDateFinishTask() {
        let currentDay = new Date().toLocaleDateString();
        let containerDateFinishTask = document.createElement('p');
        let dateFinishTask = document.createElement('input');
        containerDateFinishTask.appendChild(dateFinishTask);
        dateFinishTask.setAttribute('type', 'date');
        dateFinishTask.setAttribute('min', currentDay);


        dateFinishTask.addEventListener("change", () => {
            if (dateFinishTask.value != "") {

                this.dateFinishTask = dateFinishTask.value;
                dateFinishTask.remove();
                containerDateFinishTask.setAttribute("class", "dateFinishValue");
                containerDateFinishTask.innerHTML = "Tâche à effectuer avant le : " + makeDateInOrder(this.dateFinishTask);



                updateTaskObject(this.task.text, containerDateFinishTask.innerHTML);
                setToLocalStorage(this.task.category)

            }
        })
        return containerDateFinishTask
    }


    createTaskText() {
        let textTask = document.createElement('p');
        textTask.textContent = this.task.text;
        return textTask;
    }


    createTaskDate() {
        let date = document.createElement('p');
        date.textContent = 'crée le ' + this.task.dateCreated.toLocaleDateString();
        return date;
    }

    createDelBtn(div) {
        let delBtn = document.createElement("button");
        delBtn.innerHTML = "Supprimer";
        delBtn.classList.add("delete")


        delBtn.addEventListener("click", () => {
            if (this.task.isCompleted) {
                if (confirm("Voulez vous vraiment l'éffacer ?")) {


                    setDeleteArray(this.task)

                    setToLocalStorage(this.task.category)

                    div.remove();


                }

            } else {
                alert("Vous devez valider la tâche avant de la supprimer");
            }
        })

        return delBtn;
    }
}







export class TaskFromLocalStorage {
    constructor(text, creationDate, finishDate, category) {
        this.text = text;
        this.dateCreated = creationDate;
        this.dateFinishTask = finishDate;
        this.category = category;
        this.isCompleted = false;
    }

    completeTask() {
        this.isCompleted = true;
    }

    uncompleteTask() {
        this.isCompleted = false;
    }
}


export class TaskUIFromLocalStorage {
    constructor(task) {
        this.task = task;
    }


    createTaskElement() {
        let newDiv = document.createElement("div");
        newDiv.classList.add('task');

        let checkbox = this.createCheckbox(newDiv);
        newDiv.appendChild(checkbox);

        let textTask = this.createTaskText();
        newDiv.appendChild(textTask);

        let date = this.createTaskDate();
        newDiv.appendChild(date);

        let dateFinishTask = this.createDateFinishTask(newDiv);
        newDiv.appendChild(dateFinishTask);

        let delBtn = this.createDelBtn(newDiv);
        newDiv.appendChild(delBtn);



        return newDiv
    }


    createCheckbox(div) {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = this.task.isCompleted;

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                this.task.completeTask();
                div.classList.add("checked");
            } else {
                this.task.uncompleteTask();
                div.classList.remove("checked");
            }
        });

        return checkbox;
    }

    createDateFinishTask() {
        if (this.task.dateFinishTask != "") {
            console.log("la date est presente")
            let containerDateFinishTask = document.createElement('p');
            containerDateFinishTask.innerHTML = this.task.dateFinishTask;
            return containerDateFinishTask
        } else {
            let currentDay = new Date().toLocaleDateString();
            let containerDateFinishTask = document.createElement('p');
            let dateFinishTask = document.createElement('input');
            containerDateFinishTask.appendChild(dateFinishTask);
            dateFinishTask.setAttribute('type', 'date');
            dateFinishTask.setAttribute('min', currentDay);
            

            dateFinishTask.addEventListener("change", () => {
                if (dateFinishTask.value != "") {

                    this.dateFinishTask = dateFinishTask.value;
                    dateFinishTask.remove();
                    containerDateFinishTask.setAttribute("class", "dateFinishValue");
                    containerDateFinishTask.innerHTML = "Tâche à effectuer avant le : " + makeDateInOrder(this.dateFinishTask);
                    
                    console.log(this.task)

                    updateTaskObject(this.task.text, containerDateFinishTask.innerHTML);
                    setToLocalStorage(this.task.category)

                }
            })
            
            return containerDateFinishTask
        }

    }


    createTaskText() {
        let textTask = document.createElement('p');
        textTask.textContent = this.task.text;
        return textTask;
    }


    createTaskDate() {

        let date = document.createElement('p');
        date.textContent = 'crée le ' + new Date(this.task.dateCreated).toLocaleDateString();
        return date;
    }

    createDelBtn(div) {
        let delBtn = document.createElement("button");
        delBtn.innerHTML = "Supprimer";
        delBtn.classList.add("delete")


        delBtn.addEventListener("click", () => {
            if (this.task.isCompleted) {
                if (confirm("Voulez vous vraiment l'effacer ?")) {
                    console.log(this.task)
                    
                    setDeleteArray(this.task)

                    setToLocalStorage(this.task.category)
                    div.remove();
                    
                }

            } else {
                alert("Vous devez valider la tâche avant de la supprimer");
            }
        })

        return delBtn;
    }
}