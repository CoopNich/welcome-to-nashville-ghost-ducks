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