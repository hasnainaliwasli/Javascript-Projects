// Api Data
const apikey = '17c6301991dc718f21d3d80979326a44'
const apiEndPoint = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/original"
const trending = "/trending/movie/week?api_key="

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
                categories.forEach(category => {
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
        .then(res => {
            const movies = res.results
            // console.log(res.result);
            if (Array.isArray(movies) && movies.length) {
                buildMoviesSection(movies, category.name)
            }
        })
        .catch(err => console.error(err))
}


function buildMoviesSection(list, categoryName) {
    // console.log(list, categoryName);

    const moviesCont = document.getElementById("movies-cont");
    const moviesListHTML = list.map(item => {
        return `
        <img class="movie-item" src="${imgPath}${item.poster_path}"
                    alt="${item.title}">
        `
    }).join('')

    const moviesSectionHTML = ` 
            <h2 class="movie-section-heading">${categoryName}<span class="explore-nudge">Explore More</span></h2>
            <div class="movie-row"> 
                ${moviesListHTML}
        </div>
    
    `

    const div = document.createElement('div')
    div.className = "movies-section"
    div.innerHTML = moviesSectionHTML

    // Append with the movies Container
    moviesCont.appendChild(div)

    console.log(moviesSectionHTML);
}


window.addEventListener('load', function () {
    init()
})