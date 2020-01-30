const saveRestaurantEventHandler = (event) => {
    const restaurantButtonId = event.target.id;
    const index = restaurantButtonId.split('-')[1];

    const restaurantItinerary = document.querySelector(".itinerary__restaurants");

    const restaurantName = document.getElementById(`restaurant_name-${index}`);
    const restaurantAddress = document.getElementById(`restaurant_address-${index}`);
    const restaurantNameText = restaurantName.textContent;
    const restaurantAddressText = restaurantAddress.textContent;
    const actualRestaurantAddressText = restaurantAddressText.split(':')[1];
    apiManager.putItineraryRestaurant (`${restaurantNameText} <br> Address:${actualRestaurantAddressText}`) ;
    restaurantResultsDomManager.clearSearchResults();
};

const saveRestaurantEventManager = {
    addSaveRestaurantEventListeners() {
        const restaurantButtons = document.querySelectorAll(".restaurant-save_restaurant");
        for (let restaurantButton of restaurantButtons) {
            restaurantButton.addEventListener("click", saveRestaurantEventHandler);
        }
    },
    removeSaveRestaurantEventListeners() {
        const restaurantButtons = document.querySelectorAll(".restaurant-save_restaurant");
        for (let restaurantButton of restaurantButtons) {
            restaurantButton.removeEventListener("click", saveRestaurantEventHandler);
        }
    }
}