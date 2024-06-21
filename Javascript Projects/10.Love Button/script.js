const yesBtn = document.getElementById('yes_btn');

yesBtn.addEventListener('mouseenter', function () {
    this.classList.add('heart');
    this.innerHTML = '<span>YES</span>';
});

yesBtn.addEventListener('mouseleave', function () {
    this.classList.remove('heart');
    this.innerHTML = 'YES';
});

yesBtn.addEventListener('click', function(){
    

    
})
