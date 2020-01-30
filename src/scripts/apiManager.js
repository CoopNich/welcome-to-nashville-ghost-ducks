const apiManager = {
    //Searches through our existing itinerary.json file to see what is in the itinerary at any given time
    searchItinerary() {
        return fetch(`http://localhost:8088/itinerary`)
            .then(response => response.json());
    },

    //This put method is to put a concert(text) into the itinerary.json so that it is saved in the itinerary for all refreshes
    putItineraryConcert(text) {
        //We call the itinerary function we just set above to see what is CURRENTLY in the itinerary before changing a value
        const jsonPromise = this.searchItinerary()
        jsonPromise.then(feature => {
        /*After recieving the CURRENT itinerary, since this function for adding a concert I save every other value so that I don't lose them*/
            const park = feature.park
            const art = feature.art
            const rest = feature.restaurant
        /*Now that the other 3 values in our itinerary are saved I want to update the current itinerary with the 3 same values and my new concert*/
        fetch(`http://localhost:8088/itinerary`, {
            method: 'PUT',
            body: JSON.stringify({
                //keeps id
                "id": 1,
                //keeps other 3 values the same
                "park": park,
                "art": art,
                "restaurant": rest,
                /*concert takes the (text) in the very beginnging of the function since it is the only one changing*/
                "concert": text
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            /*this print function call updates the DOM itinerary with our CHANGED value*/
            .then(json => this.printToDOM())
        })
    },

    //This put method is to put a park(text) into the itinerary.json
    putItineraryPark(text) {
     
        const jsonPromise = this.searchItinerary()
        jsonPromise.then(feature => {
      
            const concert = feature.concert
            const art = feature.art
            const rest = feature.restaurant
 
        fetch(`http://localhost:8088/itinerary`, {
            method: 'PUT',
            body: JSON.stringify({
        
                "id": 1,
                "park": text,
                "art": art,
                "restaurant": rest,
                "concert": concert
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => this.printToDOM())
        })
    },

    putItineraryRestaurant(text) {
     
        const jsonPromise = this.searchItinerary()
        jsonPromise.then(feature => {
      
            const concert = feature.concert
            const art = feature.art
            const park = feature.park
 
        fetch(`http://localhost:8088/itinerary`, {
            method: 'PUT',
            body: JSON.stringify({
        
                "id": 1,
                "park": park,
                "art": art,
                "restaurant": text,
                "concert": concert,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => this.printToDOM())
        })
    },
    //This function prints out our itinerary on the DOM
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
