let openPopupButton = document.querySelector(".openpop")
let popupForm = document.querySelector(".popup-div")
const noteInput = document.querySelector("#notein")
const addNoteButton = document.querySelector(".button1")
const noteList = document.querySelector(".add-div")
const deleteNoteButton = document.querySelector(".delete")

window.addEventListener("click", function (event) {
    if (popupForm.contains(event.target) || openPopupButton.contains(event.target)) {
        popupForm.style.display = "block"
    } else {
        popupForm.style.display = "none"
    }
})

addNoteButton.addEventListener("click", function (e) {
    let newNote = document.createElement("div")
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<svg width="4" height="4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor" /><path d="M9 9H11V17H9V9Z" fill="currentColor" /><path d="M13 9H15V17H13V9Z" fill="currentColor" /></svg>`
    removeButton.classList.add("delete")
    newNote.innerHTML = noteInput.value
    newNote.classList = "note-list"
    // console.log(noteInput.value)


    if (noteInput.value) {
        newNote.appendChild(removeButton)
        noteList.appendChild(newNote)

        // Add new note to local storage
        let notes = localStorage.getItem("notes") || "[]"
        notes = JSON.parse(notes)
        notes.push(noteInput.value)
        localStorage.setItem("notes", JSON.stringify(notes))


        noteInput.value = ""
    }
    else {
        alert("You forgot to write your note.")
    }

    removeButton.addEventListener("click", function () {
        // Remove note from local storage and delete it from the DOM
        let notes = localStorage.getItem("notes") || "[]"
        notes = JSON.parse(notes)

        notes = notes.filter(note => note !== newNote.textContent)
        localStorage.setItem("notes", JSON.stringify(notes))
        removeButton.parentElement.remove()
    })

})
deleteNoteButton.addEventListener("click", function () {
    deleteNoteButton.parentElement.remove()
})

function getNotes() {
    let notes = localStorage.getItem("notes") || "[]"
    notes = JSON.parse(notes)
    return notes
}
const notes = getNotes()

for (let i = 0; i < notes.length; i++) {
    let newNote = document.createElement("div")
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<svg width="4" height="4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 
    15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 
    20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor" /><path d="M9 9H11V17H9V9Z" fill="currentColor" /><path d="M13 9H15V17H13V9Z" fill="currentColor" /></svg>`
    removeButton.classList.add("delete")

    newNote.innerHTML = notes[i]
    newNote.classList = "note-list"
    newNote.appendChild(removeButton)
    noteList.appendChild(newNote)

    removeButton.addEventListener("click", function () {
        // Remove note from local storage and delete it from the DOM when remove button is clicked.
        let notes = localStorage.getItem("notes") || "[]"
        notes = JSON.parse(notes)

        notes = notes.filter(note => note !== newNote.textContent)
        localStorage.setItem("notes", JSON.stringify(notes))
        removeButton.parentElement.remove()
    })
}
