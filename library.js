// Objects
let myLibrary = [];

function Book(
  title,
  author = "unknown",
  numberOfPages = 0,
  readStatus = "not read"
) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;

  this.info = () => {
    return `${this.title} by ${this.author}, ${numberOfPages} pages, ${readStatus} `;
  };

  this.toDiv = () => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="bookCover">
    <img src="https://images-na.ssl-images-amazon.com/images/I/61+NT0zxLdL._SY344_BO1,204,203,200_.jpg" />   
    </div>

    <div class="bookData ${this.readStatus}">
    <h4>${this.title}</h4>
    <p>
    By: ${this.author} <br>
    Number of pages: ${this.numberOfPages}    
    </p>
    <div



    </div>
    `;

    div.setAttribute("data-title", this.title);
    div.setAttribute("data-author", this.author);
    div.setAttribute("data-pageNumber", this.numberOfPages);
    div.setAttribute("data-readStatus", this.readStatus);
    div.setAttribute("class", "book");

    return div;
  };
}

function addBookToLibrary(title, author, numberOfPages, readStatus) {
  let library = document.getElementsByClassName("library")[0];
  let bookToPush = new Book(title, author, numberOfPages, readStatus);
  let divToCreate = bookToPush.toDiv();
  myLibrary.push(bookToPush);
  library.appendChild(divToCreate);
  console.log(myLibrary);
}

let addButton = document.querySelector(".button__add");
addButton.addEventListener("click", (e) => {
  document.querySelector(".overlay").style.display = "flex";
});



let overlay = document.querySelector(".overlay");
overlay.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("overlay") ||
    e.target.classList.contains("button__close")
  ) {
    overlay.style.display = "none";
  }
});

function addBookFromForm() {
  let tempBook = []
  let inputs = document.querySelectorAll("input")
  inputs.forEach((element) => {
    tempBook.push(element.value)
    console.log(tempBook)
  })

  let [title, author, numberOfPages, readStatus] = tempBook
  addBookToLibrary(title,author,numberOfPages,readStatus)
  
}





addBookToLibrary(
  "Harry Potter and The Cursed Child",
  "J.K. Rowling",
  245,
  "unread"
);
