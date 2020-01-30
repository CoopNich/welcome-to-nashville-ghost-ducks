const parksApiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json";

const parksApiManager = {
    searchParks(featuresSelected) {
        const multipleFeatures = featuresSelected.join("=Yes&");
        const featureUrl = parksApiBaseUrl + "?" + multipleFeatures + "=Yes"
        if (featuresSelected.length > 0) {
            return fetch(featureUrl)
            .then(resp => resp.json());
        } else {
            return fetch(parksApiBaseUrl)
            .then(resp => resp.json());
        }
        
    }
};