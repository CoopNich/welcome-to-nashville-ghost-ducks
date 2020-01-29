const baseURL = "https://data.nashville.gov/resource/eviu-nxp6.json";
const getArt = {
    searchArt(searchCriteria) {
    const artURL = baseURL + `?$where=upper(last_name) like '%25${searchCriteria.toUpperCase()}%25'`;
    return fetch(artURL)
        .then(resp => resp.json())
        // .then(parsedArt => {
        //     renderArt(parsedArt)
        // });
    }
    
}


const searchResultsDomManager = {
    artFactory(art) {
        if (!art.first_name) {
            art.first_name = ""
        }
    
        if (!art.last_name) {
            art.last_name = ""
        }
    
        if (!art.description) {
            return `
            <section class="artResults">
            <h3>Art Piece</h3><p> ${art.artwork}</p>
            <h3>Artist</h3><p> ${art.first_name} ${art.last_name}</p>
            <h3>Location</h3><p> ${art.location}</p>
            <button class="artResults__button">Save</button>
            <hr>
            </section>
            `
        } else {
            return `
        <section class="artResults">
        <h3>Art Piece</h3><p class="art"> ${art.artwork}</p>
        <h3>Artist</h3><p class="artist"> ${art.first_name} ${art.last_name}</p>
        <h3>Location</h3><p class="location"> ${art.location}</p>
        <h3>Description</h3><p> ${art.description}</p>
        <button class="artResults__button">Save</button>
        <hr>
        </section>
        `
        }
    },
    renderArt(searchResults) {

        const containter = document.querySelector(".searchResults");
        containter.innerHTML = "";

        // for (let i = 0; i < searchResults.length; i++) {
        //     const artHtml = this.artFactory(searchResults[i]);
        //     containter.innerHTML += artHtml
        // }

        searchResults.forEach(art => {
        const artHtml = this.artFactory(art);
        containter.innerHTML += artHtml;
        });

        artSaveEventManager.addSaveClickEventListener()
    }

}

const searchEventManager = {

    addSearchClickEventListener() {

        const search = document.getElementById("art__button")

        search.addEventListener("click", () => {

            const input = document.getElementById("art__input")
            const searchCriteria = input.value 
            const searchResultPromise = getArt.searchArt(searchCriteria)
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderArt(searchResults)
            });
        });

        const input = document.getElementById("art__input")
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("art__button").click();
            };
        });
    }
}


searchEventManager.addSearchClickEventListener()



//itinerary code

//take content from parent element

//render content to DOM (itinerary__art div)


const artSaveEventManager = {
    // renderItinerary() {
    //     return ``
    // }

    addSaveClickEventListener() {
        
        const save = document.querySelectorAll(".artResults__button")

        for (let i=0; i < save.length; i++) {
            let button = save[i]
            const resultSectionContent = button.parentNode
            
            const artwork = resultSectionContent.querySelector(".art")
            const artist = resultSectionContent.querySelector(".artist")
            const location = resultSectionContent.querySelector(".location")

            const artworkText = artwork.textContent
            const artistText = artist.textContent
            const locationText = location.textContent

            const itineraryDivContent = document.getElementById("itinerary__art")
            button.addEventListener("click", () => {
                    itineraryDivContent.innerHTML = 
                    `<span><strong>Piece:</strong> ${artworkText}</span><br> 
                    <span><strong>Artist:</strong> ${artistText}</span><br>
                    <span><strong>Location:</strong> ${locationText}</span>`
            })
        }
    }
}
