



let toastBox = document.getElementById('toastBox')

function showMsg(){
    let toast = document.createElement('div');
    toast.classList.add('toast','text-dark', 'show');
    toast.innerText ='Hello world'
    toastBox.appendChild(toast)

}