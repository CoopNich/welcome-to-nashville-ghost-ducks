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
        saveEventManager.removeSaveEventListeners();
        const container = document.querySelector(".searchResults");
        container.innerHTML = "<h3>Concert Results:</h3>";
        //conditional to catch for no match searches
        if (concerts.length == 0) {
            container.innerHTML += "<h3>No showings! Try searching another genre.</h3>"
        }
        for (let i = 0; i < concerts.length; i++) {
            container.innerHTML += this.concertFactory(concerts[i], (i + 1));
        };
        saveEventManager.addSaveEventListeners();
    },
    clearSearchResults() {
        const container = document.querySelector(".searchResults");
        container.innerHTML = " ";
    }

};