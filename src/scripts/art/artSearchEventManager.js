const searchEventManager = {

    addSearchClickEventListener() {

        const search = document.getElementById("art__button")

        search.addEventListener("click", () => {

            const input = document.getElementById("art__input")
            const searchCriteria = input.value 
            const searchResultPromise = getArt.searchArt(searchCriteria)
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderArt(searchResults)
            });
        });

        const input = document.getElementById("art__input")
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("art__button").click();
            };
        });
    }
}