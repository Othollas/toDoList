export const shopping = [];
export const administrative = [];
export const repair = [];
export const other = [];

export function pushTaskInArray(selectedCategory, task) {
    switch (selectedCategory) {
        case 'course':
            shopping.push(task);
            break;

        case 'administratif':
            administrative.push(task);
            break;

        case 'reparation':
            repair.push(task);
            break;

        case 'divers':
            other.push(task);
            break;
    }
}

export function makeDateInOrder(finishDate) {

    let date = finishDate;
    let mm = date.slice(5, -3)
    let dd = date.slice(8);
    let yyyy = date.slice(0, 4)

    date = dd + "/" + mm + "/" + yyyy
    return date
}



export function updateTaskObject(task, date) {
    let arrays = [shopping, administrative, repair, other];
    let find;

    arrays.forEach(array => {
        
        array.forEach(object => {
            
            if (object.task.text === task) {
                find = object;
               
                return find;
            }
        })
    })


    if (find) {
        find.task.dateFinishTask = date;
       
    }
}




export function setToLocalStorage(selectedCategory) {

    switch (selectedCategory) {
        case 'course':
            localStorage.setItem("course", JSON.stringify(shopping))
           
            break;
        case 'administratif':
            
            localStorage.setItem("administratif", JSON.stringify(administrative))
            break;

        case 'reparation':
            
            localStorage.setItem("reparation", JSON.stringify(repair))
            break;

        case 'divers':
            
            localStorage.setItem("autre", JSON.stringify(other))
            break;
    }
}

  export  function setDeleteArray(object) {
        console.log(object.category)
        switch (object.category) {
            case 'course':
             
            
            shopping.forEach(element=>{
                if(element.task.text === object.text){
                   let index = shopping.indexOf(element);
                   shopping.splice(index, 1)
                   console.log(shopping)
                }
            })
                
                break;
            case 'administratif':
                administrative.forEach(element=>{
                    if(element.task.text === object.text){
                       let index = administrative.indexOf(element);
                       administrative.splice(index, 1)
                       console.log(administrative)
                    }
                })
              
                break;
    
            case 'reparation':
                repair.forEach(element=>{
                    if(element.task.text === object.text){
                       let index = repair.indexOf(element);
                       repair.splice(index, 1)
                       console.log(repair)
                    }
                })
                break;
    
            case 'divers':
                other.forEach(element=>{
                    if(element.task.text === object.text){
                       let index = other.indexOf(element);
                       other.splice(index, 1)
                       console.log(other)
                    }
                })
                break;
        }

}