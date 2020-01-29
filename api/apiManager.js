const apiManager = {
    searchItinerary() {
        return fetch(`http://localhost:8088/itinerary`)
            .then(response => response.json());
    },
    putItineraryConcert(text) {
        const jsonPromise = this.searchItinerary()
        jsonPromise.then(feature => {
            const park = feature.park
            const art = feature.art
            const rest = feature.restaurant
        fetch(`http://localhost:8088/itinerary`, {
            method: 'PUT',
            body: JSON.stringify({
                "id": 1,
                "park": park,
                "art": art,
                "restaurant": rest,
                "concert": text
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => this.printToDOM())
        })
    },
    printToDOM() {
        const parks = document.querySelector(".itinerary__parks")
        const art = document.getElementById("itinerary__art")
        const restaurants = document.querySelector(".itinerary__restaurants")
        const concerts = document.querySelector(".itinerary__concerts")
        const jsonPromise = this.searchItinerary();
        jsonPromise.then(feature => {
            parks.innerHTML = `<strong>Park:</strong> ${feature.park}`
            art.innerHTML = `<strong>Art:</strong> ${feature.art}`
            restaurants.innerHTML = `<strong>Restaurant:</strong> ${feature.restaurant}`
            concerts.innerHTML = `<strong>Concert:</strong> ${feature.concert}`
        })
    }
}
