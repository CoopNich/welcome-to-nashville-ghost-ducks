const parksResultsDomManager = {
   parksFactory(park, index) {
        const address = park.mapped_location.human_address.split("\"")

        const specificFeaturesArray = [];
       
        const features = [`${park.community_center}`, `${park.nature_center}`, `${park.playground}`, `${park.picnic_shelters}`, `${park.dog_park}`, `${park.baseball_fields}`, `${park.basketball_courts}`, `${park.volleyball}`, `${park.soccer_fields}`, `${park.football_multi_purpose_fields}`, `${park.tennis_courts}`, `${park.disc_golf}`, `${park.skate_park}`, `${park.swimming_pool}`, `${park.spray_park}`, `${park.golf_course}`, `${park.walk_jog_paths}`, `${park.hiking_trails}`, `${park.horse_trails}`, `${park.mountain_bike_trails}`, `${park.boat_launch}`, `${park.camping_available_by_permit}`, `${park.fishing_by_permit}`, `${park.lake}`, `${park.canoe_launch}`, `${park.community_garden}`, `${park.historic_features}`];

        const featuresText = ["Community Center", "Nature Center", "Playground", "Picnic Shelters", "Dog Park", "Baseball Fields", "Basketball Courts", "Volleyball", "Soccer Fields", "Football Field", "Tennis Courts", "Disc Golf", "Skate Park", "Swimming Pool", "Spray Park", "Golf Course", "Walking/Jogging Paths", "Hiking Trails", "Horse Trails", "Mountain Bike Trails", "Boat Launch", "Camping", "Fishing", "Lake", "Canoe Launch", "Community Garden", "Historic Features"];

        for (let i = 0; i < features.length; i++) {
            if (features[i] === "Yes") {
                specificFeaturesArray.push(featuresText[i])
                }
            }

        const uniqueFeatures = specificFeaturesArray.join(", ")

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
             <p>Features: ${uniqueFeatures}</p>
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