const parksResultsDomManager = {
    parksFactory(park) {
        const address = park.mapped_location.human_address.split("\"")
        return `
        <div class="park">
            <h1>${park.park_name}</h1>
            <h3>Address: ${address[3]}</h3>
            <p>ADA Accessible:
             ${park.ada_accessible}
             </p>
            <p>Restrooms Available:
             ${park.restrooms_available}
             </p>
             <button id="save_park">Save Park</button>
        </div>
        `
    },

    noResults() {
        return `
        <div class="park">
            <h3>No parks found with all selected features. Please broaden search.</h3>
        </div>
        `
    },

    renderParksResults(searchResults) {
        const container = document.querySelector(".searchResults");
        container.innerHTML = "";
        if (searchResults.length === 0) {
            container.innerHTML += this.noResults();
        } else {
            searchResults.forEach(park => {
                container.innerHTML += this.parksFactory(park);
            });
        }
    }
};