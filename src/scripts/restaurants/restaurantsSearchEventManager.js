const restaurantResultManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("restaurant-search-button");
        button.addEventListener("click", () => {
            const input = document.getElementById("restaurant-search-criteria");
            const restaurantCuisine = input.value;
            const restaurantSearchPromise = restaurantsAPIManager.searchRestaurants(restaurantCuisine);
            restaurantSearchPromise.then(cuisine => {
                restaurantResultsDomManager.renderRestaurantResults(cuisine);
                 input.value = ""
            });
        });
    
        const input = document.getElementById("restaurant-search-criteria")
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("restaurant-search-button").click();
            };
        });
    }
}