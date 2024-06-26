let btn = document.getElementById('ageBtn')

btn.addEventListener('click', () => {

    // All Users Date of Birth Get
    let DoB = document.getElementById('date').value
    let userBirthDate = new Date(DoB)
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


})