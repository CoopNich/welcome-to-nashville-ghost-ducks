const parksResultManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("park-search-button");
        button.addEventListener("click", () => {
            const input = document.getElementById("park-search-criteria");

            const featuresSelected = [];
            const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

            for (let i = 0; i < checkboxes.length; i++) {
                featuresSelected.push(checkboxes[i].value);
            }
            const parkSearchPromise = parksApiManager.searchParks(featuresSelected);
            parkSearchPromise.then(searchResults => {
                parksResultsDomManager.renderParksResults(searchResults);
            });
        });
    }
}