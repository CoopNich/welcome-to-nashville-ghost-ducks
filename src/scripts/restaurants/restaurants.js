// restaurantsAPIManager


const apiBaseUrl = "http://data.nashville.gov/resource/vfe9-k7vc.json?";

const apiManager = {
  searchBusStops(searchCriteria) {

    console.log("searchBusStops");

    const criteria = encodeURIComponent(`"%${searchCriteria.toUpperCase()}%"`);
    const url = apiBaseUrl + `$where=route_name like ${criteria}`;
    return fetch(url).then(resp => resp.json());
  }
};

restaurantsSearchEventsManager