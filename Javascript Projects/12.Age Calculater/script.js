let btn = document.getElementById('ageBtn')
let DoB = document.getElementById('date')
DoB.max = new Date().toISOString().split('T')[0];


btn.addEventListener('click', () => {
    let result = document.querySelector('.result')
    // All Users Date of Birth Get

    let userBirthDate = new Date(DoB.value)
    let ud = userBirthDate.getDate();
    let um = userBirthDate.getMonth() + 1;
    let uy = userBirthDate.getFullYear()


    // All the current date Get
    let currentDate = new Date()
    let cd = currentDate.getDate();
    let cm = currentDate.getMonth() + 1;
    let cy = currentDate.getFullYear()


    let ageY, ageM, ageD;

    ageY = cy - uy;

    if (cm >= um) {

        ageM = cm - um;

    }
    else {
        ageY--;
        ageM = cm + 12 - um;
    }
    if (cd >= ud) {
        ageD = cd - ud

    }
    else {
        ageM--;
        ageD = cd + getDays(uy, um) - ud;
    }

    if (ageM < 0) {
        ageM = 11;
        ageY--;
    }

    function getDays(year, month) {
        return new Date(year, month, 0).getDate();
    }

    console.log(ageY, ageM, ageD);

    result.innerHTML = `You age is <span>${ageY}</span> Years <span>${ageM}</span> Months and <span>${ageD}</span> Days`


})