



let toastBox = document.getElementById('toastBox')
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error encountered! Fix it'
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully SUbmited!'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input,Check again!'

function showMsg(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast', 'text-dark', 'show');
    if(msg.includes('Error')){
        toast.classList.add('error')
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid')
    }
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    console.log(toastBox);
}



