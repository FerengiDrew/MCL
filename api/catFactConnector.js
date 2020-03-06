function fetchRandomCatFact() {
    var apiUrl = 'https://cat-fact.herokuapp.com/facts/random';
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyUrl + apiUrl).then(response => {
        return response.json();
    }).then(data => {
        var fact = data.text;
        console.log(fact);
    }).catch(err => {
        // Do something for an error here
    });
}
