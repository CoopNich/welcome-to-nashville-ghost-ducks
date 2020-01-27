const parksApiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json";

const parksApiManager = {
    searchParks(parkFeature) {
        const featureUrl = parksApiBaseUrl + `?${parkFeature}=Yes`
        return fetch(featureUrl)
            .then(resp => resp.json());
    }
};

const parksResultsDomManager = {
    parksFactory(park) {
        return `
        <div class="park">
            <h3>Park Name: ${park.park_name}</h3>
            <p>Address: ${park.mapped_location.human_address}</p>
            <p>ADA Accessible: ${park.ada_accessible}</p>
            <p>Restrooms Available: ${park.restrooms_available}</p>
        </div>
        `;
    },
    renderParksResults(feature) {
        const container = document.querySelector(".searchResults");
        container.innerHTML = "";
        feature.forEach(park => {
            container.innerHTML += this.parksFactory(park);
        });
    }
};

const parksResultManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("park-search-button");
        button.addEventListener("click", () => {
            const input = document.getElementById("park-search-criteria");
            const parkFeature = input.value;
            const parkSearchPromise = parksApiManager.searchParks(parkFeature);
            parkSearchPromise.then(feature => {
                parksResultsDomManager.renderParksResults(feature);
            });
        });
    }
}

parksResultManager.addSearchClickEventListener();