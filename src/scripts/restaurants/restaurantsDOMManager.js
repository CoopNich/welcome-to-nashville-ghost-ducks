const restaurantResultsDomManager = {
    restaurantFactory(restaurant, iNum) {
        return `
        <div class="restaurant_results">
            <h3> Name: ${restaurant.restaurant.name}</h3>
            <p>Address: ${restaurant.restaurant.location.address}</p>
            <button id="save_restaurant">Save</button>
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
        console.log(restaurantsResponse)
        const restaurants = restaurantsResponse.restaurants
        const container = document.querySelector(".searchResults");
        container.innerHTML = "";
        if (restaurantsResponse.results_found === 0) {container.innerHTML = this.emptyFactory() };
        for (let i = 0; i < restaurants.length; i++) {
            // restauraunts[i] represents current restaurant in the array being looped over
            // the following line plugs the current restaurant into the HTML factory and renders it to the DOM in the .searchResults container
          
                container.innerHTML += this.restaurantFactory(restaurants[i])
        }
    }
}
