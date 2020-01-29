const concertResultsDomManager = {
    concertFactory(concert, iNum) {
        return `
        <div class="concert">
            <p id="concertText-${iNum}">${iNum}. ${concert.name} is playing at ${concert[`_embedded`].venues[0].name} on ${concert.dates.start.localDate}</p>
            <button id="favorite-${iNum}" class="saveConcert">
            Save
           </button>
        </div>
        `;
    },
    renderconcertResults(concerts) {
        saveConcertEventManager.removeSaveEventListeners();
        const container = document.querySelector(".searchResults");
        container.innerHTML = "<h3>Concert Results:</h3>";
        //conditional to catch for no match searches
        if (concerts.length == 0) {
            container.innerHTML += "<h3>No showings! Try searching another genre, or search help for a list of genres playing.</h3>"
        }
        for (let i = 0; i < concerts.length; i++) {
            container.innerHTML += this.concertFactory(concerts[i], (i + 1));
        };
        saveConcertEventManager.addSaveEventListeners();
    },
    clearSearchResults() {
        const container = document.querySelector(".searchResults");
        container.innerHTML = " ";
    },
    helpSearch() {
        const container = document.querySelector(".searchResults");
        container.innerHTML = `
        <h3>The current genres showing with tickets available to purchase are: </h3>
        <ul class="genreList">
        <li>Comedy</li>
        <li>Rock</li>
        <li>Pop</li>
        <li>R&B</li>
        <li>Country</li>
        <li>Hip-Hop/Rap</li>
        <li>Metal</li>
        </ul>
        `
    }

};