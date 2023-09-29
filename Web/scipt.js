const contenedor = document.getElementById("row-container");
const btnCreate = document.getElementById("btn-mod");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnSave = document.getElementById("btn-save");
const forma = document.getElementById("formulario");

let html = "";
let option = "";
let formID = "";

const inputTitle = document.getElementById("InpuTitle");
const inputDesc = document.getElementById("inputDesc");
const inputImage = document.getElementById("inputImage");

btnCreate.addEventListener("click", () => {
  option = "new";
  btnSave.textContent = "new";
  inputTitle.value = "";
  inputDesc.value = "";
  inputImage.value = "";
  myModal.show();
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#btn-delete")) {
    const article = event.target.closest(".col-4");
    const idArticle = article.dataset.id;

    fetch(`http://localhost:3000/api/posts/${idArticle}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          article.remove();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
});

// crear post
forma.addEventListener("submit", (event) => {
  event.preventDefault();

  if (option === "new") {
    const newPost = {
      tittle: inputTitle.value,
      description: inputDesc.value,
      image: inputImage.value,
    };

    fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        if (res.ok) {
          alert("Post created successfully");
          myModal.hide();
          location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (option === "edit") {
    const newPost = {
      tittle: inputTitle.value,
      description: inputDesc.value,
      image: inputImage.value,
    };

    fetch(`http://localhost:3000/api/posts/${formID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        alert("Post edited successfully");
        myModal.hide();
        location.reload();
      }
    });
  }
});
// Editar
document.addEventListener("click", (event) => {
  if (event.target.matches("#btn-edit")) {
    const article = event.target.closest(".col-4");

    const idArticle = article.dataset.id;
    const urlImageEdit = article.children[0].children[0].src;
    const titleEdit = article.children[0].children[1].children[0].textContent;
    const descriptionEdit =
      article.children[0].children[1].children[1].textContent;

    formID = idArticle;
    inputTitle.value = titleEdit;
    inputDesc.value = descriptionEdit;
    inputImage.value = urlImageEdit;
    option = "edit";
    btnSave.textContent = "edit";
    myModal.show();
    console.log(idArticle, urlImageEdit, descriptionEdit, titleEdit);
  }
});

//render
fetch("http://localhost:3000/api/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((post) => {
      html += `
        <article class="col-4 d-flex justify-content-center mb-3" data-id="${post.id}">
        <div class="card" style="width: 18rem;">
          <img src="${post.image}" class="card-img-top" alt="nuevo post">
          <div class="card-body">
            <h5 class="card-title">${post.tittle}</h5>
            <p class="card-text">${post.description}</p>
            <div>
              <button  class="btn btn-primary" id="btn-edit">edit</button>
              <button  class="btn btn-danger" id="btn-delete">delete</button>
            </div>
          </div>
        </div>
      </article>`;
      contenedor.innerHTML = html;
    });
  });
