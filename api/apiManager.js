const apiManager = {
    searchItinerary() {
        return fetch(`http://localhost:8088/itinerary`)
            .then(response => response.json());
    },
    putItineraryConcert(id, text){
        fetch(`http://localhost:8088/itinerary/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            "concert": text
        })
    })
            .then(response => response.json())
            .then(json => console.log(json))
    }
}