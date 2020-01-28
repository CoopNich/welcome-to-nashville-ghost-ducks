const concertApiManager = {
    searchNashville() {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=${concertKey}`)
            .then(response => response.json());
    }
};

const concertResultsDomManager = {
    concertFactory(concert, iNum) {
        return `
        <div class="concert">
            <p>${iNum}. ${concert.name} is playing at ${concert[`_embedded`].venues[0].name} on ${concert.dates.start.localDate}</p>
        </div>
        `;
    },
    renderconcertResults(concerts) {
        const container = document.querySelector(".searchResults");
        container.innerHTML = "<h3>Concert Results:</h3>";
        for (let i = 0; i < concerts.length; i++) {
            container.innerHTML += this.concertFactory(concerts[i], (i+1));
        };
    }
};

const concertResultManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("concert-search-button");
        button.addEventListener("click", () => {
            let matching = []
            const input = document.getElementById("concert-search-criteria");
            const concertFeature = input.value;
            const concertPromise = concertApiManager.searchNashville();
            concertPromise.then(feature => {
                for (let i = 0; i < feature[`_embedded`].events.length; i++) {
                    if (feature[`_embedded`].events[i].classifications[0].genre.name.toUpperCase() == concertFeature.toUpperCase()) {
                        matching.push(feature[`_embedded`].events[i])
                    }
                    concertResultsDomManager.renderconcertResults(matching)
                }
            });
        });
    }
}

concertResultManager.addSearchClickEventListener();