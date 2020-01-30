const parksResultsDomManager = {
   parksFactory(park, index) {
        const address = park.mapped_location.human_address.split("\"")

        const specificFeaturesArray = [];
       
        if (`${park.nature_center}` === "Yes") {
            specificFeaturesArray.push("nature_center")
        }
        
        if (`${park.playground}` === "Yes") {
            specificFeaturesArray.push("Playground")
        }
        
        if (`${park.picnic_shelters}` === "Yes") {
            specificFeaturesArray.push("Picnic Shelters")
        }
        
        if (`${park.dog_park}` === "Yes") {
            specificFeaturesArray.push("Dog Park")
        }
        
        if (`${park.baseball_fields}` === "Yes") {
            specificFeaturesArray.push("Baseball Fields")
        }
        
        if (`${park.basketball_courts}` === "Yes") {
            specificFeaturesArray.push("Basketball Courts")
        }
        
        if (`${park.volleyball}` === "Yes") {
            specificFeaturesArray.push("Volleyball")
        }
        
        if (`${park.soccer_fields}` === "Yes") {
            specificFeaturesArray.push("Soccer Fields")
        }
        
        if (`${park.football_multi_purpose_fields}` === "Yes") {
            specificFeaturesArray.push("Football Field")
        }
        
        if (`${park.tennis_court}` === "Yes") {
            specificFeaturesArray.push("Tennis Court")
        }
        
        if (`${park.disc_golf}` === "Yes") {
            specificFeaturesArray.push("Disc Golf")
        }
        
        if (`${park.skate_park}` === "Yes") {
            specificFeaturesArray.push("Skate Park")
        }
        
        if (`${park.swimming_pool}` === "Yes") {
            specificFeaturesArray.push("Swimming Pool")
        }
        
        if (`${park.spray_park}` === "Yes") {
            specificFeaturesArray.push("Spray Park")
        }
        
        if (`${park.golf_course}` === "Yes") {
            specificFeaturesArray.push("Golf Course")
        }
        
        if (`${park.walk_jog_paths}` === "Yes") {
            specificFeaturesArray.push("Walking/Jogging Paths")
        }
        
        if (`${park.hiking_trails}` === "Yes") {
            specificFeaturesArray.push("Hiking Trails")
        }
        
        if (`${park.horse_trails}` === "Yes") {
            specificFeaturesArray.push("Horse Trails")
        }
        
        if (`${park.mountain_bike_trails}` === "Yes") {
            specificFeaturesArray.push("Mountain Bike Trails")
        }
        
        if (`${park.boat_launch}` === "Yes") {
            specificFeaturesArray.push("Boat Launch")
        }
        
        if (`${park.camping_available_by_permit}` === "Yes") {
            specificFeaturesArray.push("Camping")
        }
        
        if (`${park.fishing_by_permit}` === "Yes") {
            specificFeaturesArray.push("Fishing")
        }
        
        if (`${park.lake}` === "Yes") {
            specificFeaturesArray.push("Lake")
        }
        
        if (`${park.canoe_launch}` === "Yes") {
            specificFeaturesArray.push("Canoe Launch")
        }
        
        if (`${park.community_garden}` === "Yes") {
            specificFeaturesArray.push("Community Garden")
        }
        
        if (`${park.historic_features}` === "Yes") {
            specificFeaturesArray.push("Historic Features")
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