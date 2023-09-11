# To Do App Sederhana
### Dalam merancang program sederhana ini, berisikan script html dan javascript yang dihiasii dengan css dan bootstrap.

## Adapun Requirements yang diperlukan adalah :
1. User melakukan login pada halaman login. dalam program ini, email yang digunakan adalah : **dfr@gmail.com** dengan password : **123**
   ![login](https://github.com/destianafajri/Web-Development-Project-Pacmann/assets/109920172/c6f9c932-5fac-4b44-889f-6795b494feda)
2. Jika berhasil, user akan di redirect ke halaman utama todo app. dihalaman ini, selain terdapat daftar task yang belum/sedang dikerjakan yang dapat di tambah/edit/delete, dibagian footer terdapat pula jam saat ini sesuai dengan perangkat user. Jika Task sudah selesai, dapat di drag dan drop di card done.
   ![drag and drop](https://github.com/destianafajri/Web-Development-Project-Pacmann/assets/109920172/1c875669-df39-4bc5-9b65-134b5dea021f)
3. Jika menambahkan task dapat menggunakan modal add.
   ![modal-tambah](https://github.com/destianafajri/Web-Development-Project-Pacmann/assets/109920172/a43b3f9f-7196-459d-b797-5626565029ce)
4. Untuk melakukan perubahan pada task yang sudah ada, bisa menggunakan modal edit.
   ![modal-edit](https://github.com/destianafajri/Web-Development-Project-Pacmann/assets/109920172/1a3b800a-1177-4197-be7a-b0d144d3deb8)
5. Ketika melakukan delete akan muncul modal seperti berikut.
   ![modal-delete](https://github.com/destianafajri/Web-Development-Project-Pacmann/assets/109920172/381f484a-d74b-4c62-a102-bcacc5a5fa77)

## Berikut adalah langkah untuk membuat program :
pada tag `<head>` ketikkan link bootsrtrap dan link css untuk custom desain web. serta ketikkan pula link script dari bootstrap dan link script javascript login yang akan dibuat nanti dibagian paling akhir dalam tag `<body>`.
### Ini berlaku untuk semua halaman dalam todo app.
[Link Bootsrtrap](https://getbootstrap.com/docs)
```
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>To Do App | Login</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
 <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
 </head>
```
    
```
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"></script>
<script src="./assets/js/script-login.js"></script>
</body>
```
1. Membuat tampilan login dengan card bootstrap
   ```
   <section class="container w-50 bg-white mt-5 p-4 rounded">
        <h3 class="text-center my-4">Login Page</h3>

        <form action="#" class="row login-form px-3">

            <div class="mb-3 p-0">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="your.email@example.com" required>
            </div>
            
            <div class="mb-3 p-0">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="your password" required>
            </div>

            <button type="button submit" class="btn" id="btn-login">Login</button>

            <a href="/register.html">Register Here</a>
        </form>

    </section>
    ```
  * Script javascript login
    ```
    const btnLogin = document.getElementById("btn-login")
    btnLogin.addEventListener("click", function(event){
    event.preventDefault
    let loginEmail = document.getElementById("email").value
    let loginPassword = document.getElementById("password").value
    if(loginEmail && loginPassword){
        if((loginEmail == "dfr@gmail.com") && (loginPassword == '123')){
            window.location.href = "/todo.html";
        }else{
            window.alert("Email atau Password salah!")
        }
    }else{
        window.alert("Mohon mengisi Form login dengan benar!")
    }
    })
    ```
2. Membuat Tampilan Halaman To Do
   * Navbar
     ```
     <nav class="navbar navbar-expand-md">
        <div class="container">
          <a class="navbar-brand text-white" href="#">To Do App</a>
          <button class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="./todo.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./profile.html">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./login.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     ```
   * Tombol Tambah Task
     ```
      <div class="d-flex flex-row justify-content-center mb-5">
        <button class="btn-tambah" id="btn-add" data-bs-toggle="modal" data-bs-target="#myModalAdd">+ Tambahkan Task</button>
      </div>
     ```
   * Footer
     ```
      <footer class="position-absolute bottom-0 w-100 p-2">
        <h5 class="text-center text-white" id="jam">12:45:15</h5>
        <p class="text-center text-white">&copy; 2023 Pacmann</p>
      </footer>
     ```
   * Script Footer (Jam Dinamis)
     ```
      let p = document.getElementById("jam")

      function myTime(){
        let jam = new Date()
        p.innerHTML = jam.toLocaleTimeString([], {
        hour12:false
        })
      }
      setInterval(myTime, 1000)
     ```
   * Card To Do
     ```
      <section class="todo container d-flex flex-row gap-4 my-5">
        <div class="card p-4 w-50" ondrop="drop(event)" ondragover="allowDrop(event)" >
            <h3> To Do</h3>
            <div class="card p-4" draggable="true" id="todo" ondragstart="dragStart(event)">
                <!--<article>
                    <h3>Judul Item</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, voluptatum illum quisquam possimus molestias veniam ex at repellendus corporis numquam voluptate fugiat nisi magni et vitae eligendi temporibus perspiciatis cum!
                    </p>

                    <div class="d-flex flex-row gap-2">
                        <button class="btn-edit" id="btn-edit">Edit</button>
                        <button class="btn-delete" id = "btn-delete">Delete</button>
                        <button class="btn-done">Done</button>
                    </div>
                </article>
                -->
            </div>
        </div>
        <div class="card p-4 w-50" ondrop="drop(event)" ondragover="allowDrop(event)">
            <h3>Done</h3>
            <div class="card p-4" draggable="true" id="todo" ondragstart="dragStart(event)">
                <!--<article>
                    <h3>Judul Item</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, voluptatum illum quisquam possimus molestias veniam ex at repellendus corporis numquam voluptate fugiat nisi magni et vitae eligendi temporibus perspiciatis cum!
                    </p>

                    <div class="d-flex flex-row gap-2">
                        <button class="btn-edit" id="btn-edit">Edit</button>
                        <button class="btn-delete" id = "btn-delete">Delete</button>
                    </div>
                </article>
                -->
            </div>
        </div>
      </section>
     ```
   * Modal dan Form Add
     ```
      <div class="modal" tabindex="-1" id="myModalAdd">
      <div class="modal-dialog">
      <div class="modal-content">

          <!--Toast section start-->
          <div class="toast text-bg-danger" id="liveToastAdd" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body" id="toast-body">
              Isian Tidak boleh kosong!!
            </div>
          </div>
          <!--Toast section end-->

        <div class="modal-header">
          <h5 class="modal-title">Add New Task</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <!--Form Add-->
          <form id="form-add">
            <div class="mb-3 p-0">
              <label for="title" class="form-label">Title</label>
              <input type="text" class="form-control" id="title" placeholder="Judul Task">
            </div>
          
            <div class="mb-3 p-0">
              <label for="description" class="form-label">Description</label>
              <input type="text" class="form-control" id="description" placeholder="Deskripsi Tugas">
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary" id="btn-add">Tambah</button>
            </div>
          </form>

        </div>
      
      </div>
      </div>
      </div>
     ```
   * Script Add
     ```
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
     ```
   * Modal dan Form Edit
     ```
      <div class="modal" tabindex="-1" id="myModalEdit">
      <div class="modal-dialog">
      <div class="modal-content">

          <!--Toast section start-->
          <div class="toast text-bg-danger" id="liveToastEdit" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body" id="toast-body">
              Isian Tidak boleh kosong!!
            </div>
          </div>
          <!--Toast section end-->

        <div class="modal-header">
          <h5 class="modal-title">Edit Task</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <!--Form Edit-->
          <form id="edit-form">
            <div class="mb-3 p-0">
              <label for="title" class="form-label">Title</label>
              <input type="text" class="form-control" id="edit-title" placeholder="Judul Task">
            </div>
          
            <div class="mb-3 p-0">
              <label for="description" class="form-label">Description</label>
              <input type="text" class="form-control" id="edit-description" placeholder="Deskripsi Tugas">
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary" id="btn-edit">Save</button>
            </div>
          </form>

        </div>
      </div>
      </div>
      </div>
     ```
   * Script Edit
     ```
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
     ```
   * Modal Delete
     ```
      <div class="modal" tabindex="-1" id="myModalDelete">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Perhatian!!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Apakah Anda yakin ingin menghapus task ini?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" id="btn-delete">Delete</button>
          </div>
        </div>
      </div>
      </div>
     ```
