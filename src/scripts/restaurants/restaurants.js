
const restaurantsAPIManager = {
    searchRestaurants(restaurantCuisine) {
        const apiURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${restaurantCuisine}&cuisines=${restaurantCuisine}&apikey=b8fa3a978e54fb37bb99b79308ab00b3`;
    //    console.log(apiURL)
        return fetch(apiURL)
            .then(resp => resp.json())
    }
    
};

const restaurantResultsDomManager = {
    restaurantFactory(restaurant) {
        return `
        <div class="restaurant">
            <h3> Name: ${restaurant.restaurant.name}</h3>
            <p>Address: ${restaurant.restaurant.location.address}</p>
        </div>
        `;
    },
    renderRestaurantResults(restaurantsResponse) {
        // console.log(restaurants)
        const restaurants = restaurantsResponse.restaurants
        const container = document.querySelector(".searchResults");
        container.innerHTML = "";
        for (let i=0; i<restaurants.length; i++) {
            // restauraunts[i] represents current restaurant in the array being looped over
            // the following line plugs the current restaurant into the HTML factory and renders it to the DOM in the .searchResults container
            container.innerHTML += this.restaurantFactory(restaurants[i]);}
    }
}

const restaurantResultManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("restaurant-search-button");
        button.addEventListener("click", () => {
            const input = document.getElementById("restaurant-search-criteria");
            const restaurantCuisine = input.value;
            const restaurantSearchPromise = restaurantsAPIManager.searchRestaurants(restaurantCuisine);
            restaurantSearchPromise.then(cuisine => {
                restaurantResultsDomManager.renderRestaurantResults(cuisine);
            });
        });
    }
}

restaurantResultManager.addSearchClickEventListener();