
const restaurantResultsDomManager = {
    restaurantFactory(restaurant, index) {
        return `
        <div class="restaurant_results">
            <h3 id="restaurant_name-${index}">${restaurant.restaurant.name}</h3>
            <p id="restaurant_address-${index}">Address:${restaurant.restaurant.location.address}</p>
            <button id="save_restaurant-${index}" class="restaurant-save_restaurant">Save</button>
        </div>
        `;
    },
    emptyFactory() {
        return `
        <div class="restaurant">
            <h3> No Results Found </h3>
        </div>
        `;
    },
    renderRestaurantResults(restaurantsResponse) {
        const restaurants = restaurantsResponse.restaurants
        const container = document.querySelector(".searchResults");
        container.innerHTML = "";
        if (restaurantsResponse.results_found === 0) {container.innerHTML = this.emptyFactory() };
        for (let i = 0; i < restaurants.length; i++) {
            // restauraunts[i] represents current restaurant in the array being looped over
            // the following line plugs the current restaurant into the HTML factory and renders it to the DOM in the .searchResults container
          
                container.innerHTML += this.restaurantFactory(restaurants[i], i)
                
        }
        saveRestaurantEventManager.addSaveRestaurantEventListeners()
       
    },
    clearSearchResults() {
        const container = document.querySelector(".searchResults");
        container.innerHTML = " ";
    }
    
}
