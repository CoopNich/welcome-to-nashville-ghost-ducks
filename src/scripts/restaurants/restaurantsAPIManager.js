const restaurantsAPIManager = {
    searchRestaurants(restaurantCuisine) {
        const apiURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${restaurantCuisine}&cuisines=${restaurantCuisine}&apikey=${restaurantsAPIKey}`;
        // console.log(apiURL)
        return fetch(apiURL)
            .then(resp => resp.json())
    }

};