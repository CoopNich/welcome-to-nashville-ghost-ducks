const concertResultManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("concert-search-button");
        button.addEventListener("click", () => {
            //this is a special array of matching results that I can push to so that I can be choosier with my data used in methods
            let matching = []
            const input = document.getElementById("concert-search-criteria");
            let concertFeature = input.value;
            const concertPromise = concertApiManager.searchNashville();
            concertPromise.then(feature => {
                //since the api has hip-hop/rap as same genre this conditional makes searching for either easier and return a result
                if (concertFeature.toLowerCase() == "rap" ||  concertFeature.toLowerCase() == `hip-hop`) {
                    concertFeature = `Hip-Hop/Rap`
                }
                for (let i = 0; i < feature[`_embedded`].events.length; i++) {
                    //checks if my input equals the genre listed in API
                    if (feature[`_embedded`].events[i].classifications[0].genre.name.toUpperCase() == concertFeature.toUpperCase()) {
                        matching.push(feature[`_embedded`].events[i])
                    }
                    concertResultsDomManager.renderconcertResults(matching)
                }
            });
        });
    },
    addClearClickEventListener() {
        const clearButton = document.getElementById("clear-search-button");
        clearButton.addEventListener("click", () => {
            concertResultsDomManager.clearSearchResults()
        })
    }
}