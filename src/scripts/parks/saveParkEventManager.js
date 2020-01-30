const saveParkEventHandler = (event) => {
    const parkButtonId = event.target.id;
    const index = parkButtonId.split('-')[1];

    const parkItinerary = document.querySelector(".itinerary__parks");

    const parkName = document.getElementById(`park_name-${index}`);
    const parkAddress = document.getElementById(`park_address-${index}`);
    const parkNameText = parkName.textContent;
    const parkAddressText = parkAddress.textContent;
    const actualParkAddressText = parkAddressText.split(':')[1];
    // parkItinerary.innerHTML = `<strong>Park: </strong>${parkNameText} <br> ${actualParkAddressText}`;
    const allParkText = `${parkNameText} - ${actualParkAddressText}`;
    apiManager.putItineraryConcert(allParkText);
    parksResultsDomManager.clearSearchResults();
};

const saveParkEventManager = {
    addSaveParkEventListeners() {
        const parkButtons = document.querySelectorAll(".park-save_park");
        for (let parkButton of parkButtons) {
            parkButton.addEventListener("click", saveParkEventHandler);
        }
    },
    removeSaveParkEventListeners() {
        const parkButtons = document.querySelectorAll(".park-save_park");
        for (let parkButton of parkButtons) {
            parkButton.removeEventListener("click", saveParkEventHandler);
        }
    }
}
