const parksApiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json";

const parkArray = [];


const parksApiManager = {
    searchParks(featuresSelected) {
        const multipleFeatures = featuresSelected.join("=Yes&");
        const featureUrl = parksApiBaseUrl + "?" + multipleFeatures + "=Yes"
        return fetch(featureUrl)
            .then(resp => resp.json());
    }
};

const parksResultsDomManager = {
    parksFactory(park) {
        const address = park.mapped_location.human_address.split("\"")
        if (parkArray !== 0) {
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
        } else {
            return `
            <div class="park">
                <h1>No Results</h1>
            </div>
            `
        } 
        
    },
    renderParksResults(feature) {
        const container = document.querySelector(".searchResults");
        container.innerHTML = "";
        feature.forEach(park => {
            // console.log(parkArray)
            parkArray.push(park);
            container.innerHTML += this.parksFactory(park);
        });
    }
};

const parksResultManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("park-search-button");
        button.addEventListener("click", () => {
            const input = document.getElementById("park-search-criteria");

            const featuresSelected = [];
            const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

            for (let i = 0; i < checkboxes.length; i++) {
            featuresSelected.push(checkboxes[i].value);
}
            const parkSearchPromise = parksApiManager.searchParks(featuresSelected);
            parkSearchPromise.then(feature => {
                parksResultsDomManager.renderParksResults(feature);
            });
        });
    }
}

parksResultManager.addSearchClickEventListener();




