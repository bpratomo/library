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

    <div class="bookData">
    <h4>${this.title}</h4>
    <p>
    Author: ${this.author}
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
  let bookToPush = new Book(title, author);
  let divToCreate = bookToPush.toDiv();
  myLibrary.push(bookToPush);
  library.appendChild(divToCreate);
  console.log(myLibrary);
}

addBookToLibrary("Harry Potter", "JKROWLING");
