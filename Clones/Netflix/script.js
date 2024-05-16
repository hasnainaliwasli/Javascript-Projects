// Api Data
const apikey = '17c6301991dc718f21d3d80979326a44'
const apiEndPoint = "https://api.themoviedb.org/3"
const apiPaths = {
    fetchAllCategories: `${apiEndPoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList:  `${apiEndPoint}/genre/movie/list?api_key=${apikey}`

}


function init() {
    fetchAndBuildAllSections()
}

function fetchAndBuildAllSections() {
    fetch(apiPaths.fetchAllCategories)
        .then(res => res.json())
        .then(res => {
            const categories = res.genres;
            if (Array.isArray(categories) && categories.length) {
                categories.forEach(category => {
                    fethAndBuildMovieSection(category)
                });

            }
            // console.table(category);
        })
        .catch(err => console.log(err))
}


function fethAndBuildMovieSection(category) {
    console.log(category);
}


window.addEventListener('load', function () {
    init()
})