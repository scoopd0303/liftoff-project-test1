window.addEventListener('load', function() {

    function returnFetchString(searchQuery) {
        let fetchString = "https://www.googleapis.com/books/v1/volumes?q="
        searchQuery = searchQuery.toLowerCase().replaceAll(' ', '+');
        let apiKey = '&key=AIzaSyDk87M-Tr5KQMeR2ZlCIjQ2nEsqiAo-uMg&maxResults=40'
        return fetchString + searchQuery + apiKey;
    }

    function returnObjectFieldsAsHtml(object) {
        return `
                <img class="book" src="${object.thumbnail}">
                <div class="book-info">
                    <p class="title">${object.title}</p>
                    <p class="author">${object.author}</p>
                </div>
        `;
    }

    let searchForm = document.forms["search-form"];
    let results = document.getElementById('results');

    searchForm.addEventListener('submit', function(event) {

        event.preventDefault();

        results.innerHTML = '';

        let searchQuery = document.querySelector('input[name=search-query]').value;

        let fetchString = returnFetchString(searchQuery);

        let json = [];


        fetch(fetchString).then(function(response) {
            response.json().then(function(json) {

                let jsonItems = json.items;
                
                for (i = 0; i < jsonItems.length; i++) {

                    let thumbnail = "";
                    if(jsonItems[i].volumeInfo.imageLinks === undefined) {
                        thumbnail = 'images/not-found.png';
                    } else {
                        thumbnail = jsonItems[i].volumeInfo.imageLinks.thumbnail;
                    }

                    

                    let book = {
                        title: jsonItems[i].volumeInfo.title,
                        author: jsonItems[i].volumeInfo.authors,
                        thumbnail: thumbnail
                    }

                    let result = document.createElement('div');

                    result.classList.add('result');

                    result.innerHTML = returnObjectFieldsAsHtml(book);
                    
                    results.appendChild(result);

                }

            });
        });

    })
})
