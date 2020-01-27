// restaurantsAPIManager


const apiBaseUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=b8fa3a978e54fb37bb99b79308ab00b3";

const apiManager = {
  searchRestaurants(searchCriteria) {

    console.log("searchRestaurants");

    const criteria = encodeURIComponent(`"%${searchCriteria.toUpperCase()}%"`);
    const url = apiBaseUrl + `$where=route_name like ${criteria}`;
    return fetch(url).then(resp => resp.json());
  }
};

// restaurantsSearchEventsManager

const searchEventManager = {
  addSearchClickEventListener() {
    console.log("addSearchClickEventListener");

    const button = document.getElementById("search-btn");

    button.addEventListener("click", () => {

      console.log("button click handler");

      const input = document.getElementById("search-criteria");
      const searchCriteria = input.value;
      const searchResultPromise = apiManager.searchBusStops(searchCriteria);
      searchResultPromise.then(searchResults => {
        searchResultsDomManager.renderSearchResults(searchResults);
      });
    });
  }
}

// restaurantsDOMManager

const searchResultsDomManager = {
  busStopFactory(busStop, index) {
    console.log("busStopFactory");

    // We use the "index" to make unique ids for each bus stop
    return `
      <section id="busstop-${index}" class="bus-stop">
        <div id="routename-${index}" class="bus-stop__route-name">
          ${busStop.route_name}
        </div>
        <div id="stopname-${index}" class="bus-stop__stopname">
          ${busStop.stopname}
        </div>
        <button id="favorite-${index}" class="bus-stop__favorite">
          Favorite &#11088;
        </button>
      </section>
    `;
  },
  renderSearchResults(searchResults) {

    console.log("renderSearchResults");

    favoriteEventManager.removeFavoriteEventListeners();

    const container = document.querySelector("#search-results");
    container.innerHTML = "";

    for (let i=0; i<searchResults.length; i++) {
      const busStop = searchResults[i];
      container.innerHTML += this.busStopFactory(busStop, i);
    }

    favoriteEventManager.addFavoriteEventListeners();
  }
};

