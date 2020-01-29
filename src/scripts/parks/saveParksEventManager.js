const saveParkEventHandler = (event) => {
    const parkButtonId = event.target.id;
    const index = parkButtonId.split('-')[1];

    const parkName = document.getElementById(`park_name-${index}`);
    const parkAddress = document.getElementById(`park_address-${index}`);
    const parkAdaAccess = document.getElementById(`park_ada_access-${index}`);
    const parkRestrooms = document.getElementById(`park_restrooms-${index}`);

    // need to add alert here

    const parkSection = document.getElementById(`park-${index}`);
    parkSection.classList.add('saved_park');
};

const saveParksEventManager = {
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
