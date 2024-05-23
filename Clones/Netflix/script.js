// Api Data
const apikey = '17c6301991dc718f21d3d80979326a44'
const apiEndPoint = "https://api.themoviedb.org/3"
const apiPaths = {
    fetchAllCategories: `${apiEndPoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList: (id) => `${apiEndPoint}/discover/movie?api_key=${apikey}&with_genres=${id}`

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
                categories.slice(0,2).forEach(category => {
                    fethAndBuildMovieSection(
                        apiPaths.fetchMoviesList(category.id), category)
                });

            }
            // console.table(category);
        })
        .catch(err => console.log(err))
}


function fethAndBuildMovieSection(fetchUrl, category) {
    // console.log(fetchUrl, category);

    fetch(fetchUrl)
        .then(res => res.json())
        .then(res => console.log(res.results))
        .catch(err =>console.error(err))
}


window.addEventListener('load', function () {
    init()
})