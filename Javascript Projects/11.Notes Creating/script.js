

// Get Element Function
function getElement(id) {
    return document.getElementById(id)
}


// All Elements

const createBtn = getElement('createBtn')
const notes = document.querySelectorAll('.input_box')
const trashBtn = getElement('trashBtn')
const notesContainer = document.querySelector('.notes-container')


// For Local storage

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes()

function updateNotes() {
    localStorage.setItem('notes', notesContainer.innerHTML)
}



createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p')
    let img = document.createElement('img');
    img.src = './images/delete.png'
    inputBox.className = 'input-box'
    inputBox.setAttribute('contenteditable', 'true');
    notesContainer.appendChild(inputBox).appendChild(img)
})



notesContainer.addEventListener('click', (e) => {

    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateNotes()

    }
    else if (e.target.tagName === 'P') {
        let notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateNotes()
            }
        })

    }
})


document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})