const concertApiManager = {
    searchNashville() {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=${concertKey}`)
            .then(response => response.json());
    }
};