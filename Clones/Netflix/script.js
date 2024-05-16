// Api Data
const apikey = '17c6301991dc718f21d3d80979326a44'
const apiEndPoint = "https://api.themoviedb.org/3"
const apiPaths = {
    fetchAllCategories: `${apiEndPoint}/genre/movie/list?api_key=${apikey}`
}


function init() {
    fetch(apiPaths.fetchAllCategories)
        .then(res => res.json())
        .then(res => console.table(res.genres))
        .catch(err => console.log(err))
}


window.addEventListener('load', function () {
    init()
})