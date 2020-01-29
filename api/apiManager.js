const apiManager = {
    searchItinerary() {
        return fetch(`http://localhost:8088/itinerary`)
            .then(response => response.json());
    },
    putItineraryConcert(text) {
        fetch(`http://localhost:8088/itinerary/1`, {
            method: 'PUT',
            body: JSON.stringify({
                "concert": text
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    },
    printToDOM() {
        const parks = document.querySelector(".itinerary__parks")
        const art = document.querySelector(".itinerary__art")
        const restaurants = document.querySelector(".itinerary__restaurants")
        const concerts = document.querySelector(".itinerary__concerts")
        const jsonPromise = this.searchItinerary();
        jsonPromise.then(feature => {
            parks.innerHTML = `<strong>Park:</strong>${feature.park}`
            art.innerHTML = `<strong>Art:</strong>${feature.art}`
            restaurants.innerHTML = `<strong>Restaurant:</strong>${feature.restaurant}`
            concert.innerHTML = `<strong>Concert:</strong>${feature.concert}`
        })
    }
}
