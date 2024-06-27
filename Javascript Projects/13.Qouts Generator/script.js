let key = '1ku/YPle/CYpXw2GI2r1kw==h5kfNMs2Ne1soYnp'

let newQout = document.getElementById('newQout')
let tweet = document.getElementById('tweet')
let qout = document.getElementById('qout')
let author = document.getElementById('author')


async function fetchQuotes() {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?`, {
            method: 'GET',
            headers: {
                'X-Api-Key': key,
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

newQout.addEventListener('click', () => {
    (async () => {

        const re = await fetchQuotes();
        let authorName = re[0].author
        let qoutApi = re[0].quote
        qout.innerHTML = qoutApi;
        author.innerHTML = authorName
    })();
})

tweet.addEventListener('click', () => {
    window.open("https://twitter.com/intent/tweet?text=" + qout.innerHTML + " --By " + author.innerHTML, 'Tweet Window', " width =600 , height =300")
})

