let DomManager = (() => {
  function initiate() {
    setupOverlayToggle();
    setupSampleEntry();
  }

  function toggleOverlay() {
    let overlay = document.querySelector(".overlay");
    let isShown = overlay.classList.contains("show");
    if (isShown) {
      overlay.classList.remove("show");
      overlay.classList.add("noshow");
    } else {
      overlay.classList.add("show");
      overlay.classList.remove("noshow");
    }
  }

  function setupOverlayToggle() {
    //Add event to toggle overlay one and off
    let addButton = document.querySelector(".button__add");
    let overlay = document.querySelector(".overlay");

    addButton.addEventListener("click", toggleOverlay);

    overlay.addEventListener("click", (e) => {
      console.log(e.target)
      if (
        e.target.classList.contains("overlay") ||
        e.target.classList.contains("button__close")
      ) {
        toggleOverlay();
        BookForm.clear();
      }
    });
  }

  function setupSampleEntry() {
    BookLibrary.add({
      title: "Harry Potter and The Cursed Child",
      author: "J.K. Rowling",
      numberOfPages: 245,
      readStatus: "unread",
    });
  }

  return {
    initiate,
    setupOverlayToggle,
    setupSampleEntry,
  };
})();

class Book {
  constructor({ title, author, numberOfPages, readStatus }) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
  }

  toDiv() {
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
      </div>
    `;

    div.setAttribute("data-bookId", this.title);
    div.setAttribute("class", "book");

    return div;
  }
}

let BookLibrary = (() => {
  let myLibrary = [];
  let library = document.getElementsByClassName("library")[0];

  function load() {}

  function add(bookData) {
    let tempBook = new Book(bookData);
    let divToCreate = tempBook.toDiv();
    myLibrary.push(tempBook);
    library.appendChild(divToCreate);
    console.log(myLibrary);
  }

  function remove() {}

  return { load, add, remove };
})();

let BookForm = (() => {
  //class library
  let validateText = (value) => {
    true;
  };
  let validateNumber = (value) => {
    true;
  };
  let validateStatus = (value) => {
    true;
  };

  let validationFunctions = {
    title: validateText,
    author: validateText,
    pageNumber: validateNumber,
    readStatus: validateStatus,
  };

  let inputs = document.querySelectorAll("input");
  let incorrectCount = 0;

  //class methods

  function validate() {
    incorrectCount = 0;

    inputs.forEach((element) => {
      let isValid = validationFunctions[element.getAttribute("id")](
        element.value
      );
      incorrectCount = isValid ? incorrectCount : incorrectCount + 1;
    });

    return incorrectCount === 0 ? true : false;
  }

  function flagInvalid() {
    alert("book not valid!");
  }

  function retrieve() {
    let values = [];
    inputs.forEach((element) => values.push(element.value));
    return values;
  }

  function submit() {
    let isValid = validate();
    if (isValid) {
      let bookData = retrieve();
      BookLibrary.add(bookData);
    } else {
      flagInvalid();
    }
  }

  function clear() {
    inputs.forEach((element) => {
      element.value = "";
    });
  }

  return { submit, clear };
})();

window.onload = function () {
  DomManager.initiate();
};
