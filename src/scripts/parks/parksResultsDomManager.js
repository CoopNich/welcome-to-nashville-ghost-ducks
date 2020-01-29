const parksResultsDomManager = {
    featuresFactory(object, value) {
        return park.keys(object).find(key => object[key]=== value);
    },
    parksFactory(park, index) {
        const address = park.mapped_location.human_address.split("\"")
        return `
        <div id="park-${index}" class="park">
            <h1 id="park_name-${index}" class="park-park_name">${park.park_name}</h1>
            <h3 id="park_address-${index}" class="park-address">Address: ${address[3]}</h3>
            <p id="park_ada_access" class="park-ada_access">ADA Accessible:
             ${park.ada_accessible}
             </p>
            <p id="park_restrooms" class="park-restrooms">Restrooms Available:
             ${park.restrooms_available}
             </p>
             <button id="save_park-${index}" class="park-save_park">Save Park &#11088</button>
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

        saveParkEventManager.removeSaveParkEventListeners();

        const container = document.querySelector(".searchResults");

        container.innerHTML = "";

        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
        
        if (searchResults.length === 0) {
            container.innerHTML += this.noResults();
        } else {
            searchResults.forEach(park => {
                container.innerHTML += this.parksFactory(park);
            });
        }

        saveParkEventManager.addSaveParkEventListeners();
    },

    clearSearchResults() {
        const container = document.querySelector(".searchResults");
        container.innerHTML = " ";
    }
};

parksResultsDomManager.featuresFactory('Yes');



