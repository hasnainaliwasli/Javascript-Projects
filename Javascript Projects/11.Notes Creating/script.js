

// Get Element Function
function getElement(id) {
    return document.getElementById(id)
}


// All Elements

const createBtn = getElement('createBtn')
const input_box = getElement('input_box')
const trashBtn = getElement('trashBtn')
let text = getElement('text')


// For Local storage

// Function for creating Notes

createBtn.addEventListener('click', () => {
    let firstDiv = document.createElement('div');
    let textDiv = document.createElement('div');
    let btn = document.createElement('button');
    let innerBtn = '<i class="fa-solid fa-trash"></i>';

    btn.innerHTML = innerBtn;
    btn.className = 'trashBtn';

    firstDiv.className = 'input_box';
    textDiv.className = 'editable_text';
    textDiv.setAttribute('contenteditable', 'true');

    firstDiv.appendChild(textDiv);
    firstDiv.appendChild(btn);

    document.getElementById('text').appendChild(firstDiv);

    console.log(firstDiv);
});

text.addEventListener('click',(e)=>{
    if(e.target.tagName === 'I' ){
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.tagName === 'IMG' ){
        e.target.parentElement.remove();
    }
})
