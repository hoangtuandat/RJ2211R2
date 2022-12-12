function getJSONimg() {
    return new Promise(function(resolve) {
        axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC')
        .then(function(json) {
            resolve(json.data);
        })
    })
}

// function getJSONimg() {
    getJSONimg() 
    .then((result) => {
        console.log(result);
    })
// }
// getJSONimg();