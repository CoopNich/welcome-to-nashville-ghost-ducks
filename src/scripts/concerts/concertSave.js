const saveConcertEventHandler = (evt) => {
    const buttonId = evt.target.id;
    const index = buttonId.split('-')[1];
    const itinerary = document.querySelector(".itinerary__concerts")
    const targetConcert = document.getElementById(`concertText-${index}`);
    const concertText = targetConcert.textContent;
    const actualConcertText = concertText.split('.')[1];
    apiManager.putItineraryConcert(actualConcertText)
    concertResultsDomManager.clearSearchResults();
    // apiManager.printToDOM()
};

const saveConcertEventManager = {
    addSaveEventListeners() {
        const buttons = document.querySelectorAll(".saveConcert");
        for (let button of buttons) {
            button.addEventListener("click", saveConcertEventHandler);
        }
    },
    removeSaveEventListeners() {
        const buttons = document.querySelectorAll(".saveConcert");
        for (let button of buttons) {
            button.removeEventListener("click", saveConcertEventHandler);
        }
    }
}