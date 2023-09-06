console.log('helo')
let myLibrary = []
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read=read
    
}
Book.prototype.toggleRead = function () {
    this.read=!this.read
}
function toggleRead(index) {
    myLibrary[index].toggleRead();
    render()
}
function render() {
    let libraryBook = document.querySelector("#library")
    libraryBook.innerHTML=''
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]
        let bookEl = document.createElement('div')
        bookEl.setAttribute('class',"book-card")
        bookEl.innerHTML =
            `<div class="card-header">
            <h3 class='title'>${book.title}</h3>
            <h5 class='author'>${book.author}</h5>
            </div>
            <div class='card-body'>
            <p>${book.pages} pages</p>
            <p class='read-status'>${book.read ? "Read" : "Not read yet"}</p>
            <button class="removeBtn" onclick="removeBook(${i})">Remove</button>
            `
        libraryBook.appendChild(bookEl)
    }
}
function removeBook(index) { 
    myLibrary.splice(index, 1)
    render()
    
}
function addBookToLibrary() {
    let title = document.querySelector("#title").value
    let author= document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").value
    let newBook = new Book(title, author, pages, read)
    console.log(newBook)
    myLibrary.push(newBook)
    render()
    
}
let addBookbtn = document.querySelector('#addBookBtn');
addBookbtn.addEventListener('click', function () {
    let addBookForm = document.querySelector('#addBookForm')
    addBookForm.style.display="flex"
})
document.querySelector('#addBookForm').addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('hey')
    addBookToLibrary()
})
