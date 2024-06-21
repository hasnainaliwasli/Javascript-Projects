function getElement(id) {
    return document.getElementById(id)
}

function topNum() {
    return parseInt(Math.random() * 50 + 15)
}
function rightNum() {
    return parseInt(Math.random() * 50 + 35)
}

const yesBtn = getElement('yes_btn');
const noBtn = getElement('no_btn');
const msg = getElement('msg');
const inner_cont = getElement('inner_cont');
const msg_cont = getElement('msg_cont');

// To Convert the YES Button to Heart Shape

yesBtn.addEventListener('mouseenter', function () {
    this.classList.add('heart');
    this.innerHTML = '<span>YES</span>';
});

yesBtn.addEventListener('mouseleave', function () {
    this.classList.remove('heart');
    this.innerHTML = 'YES';
});

// When Click on YES Button

yesBtn.addEventListener('click', () => {
    inner_cont.style.display = 'none'
    msg_cont.style.display = 'block'
})

// To move the NO Button

noBtn.addEventListener('mouseenter', function () {

    noBtn.style.position = 'absolute';
    noBtn.style.top = topNum() + "vh";
    noBtn.style.right = rightNum() + "vw";

})

noBtn.addEventListener('click', function () {

    console.log('hello');

})


