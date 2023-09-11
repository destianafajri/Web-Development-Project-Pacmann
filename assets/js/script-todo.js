function dragStart(event) {
    event.dataTransfer.setData("todo", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
  }

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("todo");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
}

function allowDrop(event){
    event.preventDefault();
}

const todoItem = document.getElementById("todo");
window.onload = () => {
    //calling AJAX
    const xhr = new XMLHttpRequest();
    const url = "/data/data-task.json";

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //cek data, apakah sudah ada di local storage
            let data = JSON.parse(localStorage.getItem("data"));

            if (!data) {
                //localStorage.setItem("data",this.response);
                //kl blm, save data ke local storage, 
                //data = JSON.parse(localStorage.getItem("data"));
                console.log(this.response);
            }

            //kmd render ke html
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
};

//CRUD

//fungsi add
const formAdd = document.getElementById("form-add");
formAdd.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (title && description){
        let article = document.createElement('article');
        let badgeDelete = document.createElement('a')
        let badgeEdit = document.createElement('a')
        let p = document.createElement("p")
        let h3 = document.createElement("h3")
        h3.appendChild(document.createTextNode(title));
        p.appendChild(document.createTextNode(description));
        article.setAttribute("class", 'border p-3 mt-3');
        article.setAttribute("ondragstart", 'drag(event)');
        article.setAttribute("draggable", 'true');
        article.setAttribute("id", title + description);
        badgeDelete.setAttribute('href', "#");
        badgeDelete.setAttribute('class', "badge bg-danger link-underline link-underline-opacity-0 mr-3");
        badgeDelete.setAttribute('id', 'delete-'+ title + description);
        badgeDelete.setAttribute("data-bs-toggle", "modal");
        badgeDelete.setAttribute("data-bs-target", "#myModalDelete");
        badgeEdit.setAttribute('href', "#");
        badgeEdit.setAttribute('class', "badge bg-info link-underline link-underline-opacity-0 mr-3");
        badgeEdit.setAttribute('id', 'edit-'+ title + description);
        badgeEdit.setAttribute("data-bs-toggle", "modal");
        badgeEdit.setAttribute("data-bs-target", "#myModalEdit");
        badgeEdit.setAttribute("data-title", title);
        badgeEdit.setAttribute("data-desc", description);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(badgeDelete);
        article.appendChild(badgeEdit);
        badgeDelete.appendChild(document.createTextNode("Delete"));
        badgeEdit.appendChild(document.createTextNode("Edit"));

        todoItem.appendChild(article);

        const task = {
            id: title + description,
            title: title,
            desc: description,   
        };

        const data = JSON.parse(localStorage.getItem("data"));
        data.push(task);

        localStorage.setItem("data", JSON.stringify(data));

        const modalAdd = bootstrap.Modal.getInstance("#myModalAdd");
        modalAdd.hide();

        formAdd.reset();

    }
    else{
        const toastAdd = document.getElementById("liveToastAdd");
        const toast = new bootstrap.Toast(toastAdd);
        toast.show();
    }

});

//fungsi edit
const modalEdit = document.getElementById("myModalEdit");
modalEdit.addEventListener("show.bs.modal",(event) => {
    
    let oldTitle = document.getElementById("edit-title");
    let oldDescription = document.getElementById("edit-description");

    oldTitle.value = event.relatedTarget.attributes["data-title"].value;
    oldDescription.value = event.relatedTarget.attributes["data-description"].value;

    const data = JSON.parse(localStorage.getItem("data"));

    let sameTasks = data.filter((task) => task.title == oldTitle.value);
    let diffTasks = data.filter((task) => task.description == oldDescription.value);

    let editForm = document.getElementById("edit-form");
    editForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let newTitle = document.getElementById("edit-title").value;
        let newDescription = document.getElementById("edit-description").value;

        if ((newTitle && newDescription) != ""){
            document.getElementById(sameTasks[0].id).firstChild.innerHTML = newTitle;
            document.getElementById(sameTasks[0].id).firstChild.nextSibling.innerHTML = newDescription;
            document.getElementById(sameTasks[0].id).setAttribute("id", newTitle + newDescription);

            let newTask = {
                id: "id" + newTitle,
                title: newTitle,
                desc: newDescription,
            };

            //Memasukkan nilai baru dalam array task
            diffTasks.push(newTask);
            localStorage.setItem("data", JSON.stringify(diffTasks));

            //tutup modal edit
            const myModalEdit = bootstrap.Modal.getInstance("#myModalEdit");
            myModalEdit.hide();
            



        }else{
            const toastEdit = document.getElementById("liveToastEdit");
            const toast = new bootstrap.Toast(toastEdit);
            toast.show();
        }

        editForm.reset();

    });

});



//fugnsi untuk jam
let p = document.getElementById("jam")

function myTime(){
    let jam = new Date()
    p.innerHTML = jam.toLocaleTimeString([], {
        hour12:false
    })
}
setInterval(myTime, 1000)