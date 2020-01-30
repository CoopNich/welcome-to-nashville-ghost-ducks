const artSaveEventManager = {

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

            const artHtml = `${artworkText} at ${locationText}`

            const itineraryDivContent = document.getElementById("itinerary__art")
            button.addEventListener("click", () => {
                    apiManager.putItineraryArt(artHtml)

                    // itineraryDivContent.innerHTML = 
                    // `<table class="itinerary__table">
                    // <tr>
                    // <td class="category"><strong>Art</strong></td>
                    // <td class="savedInfo"> ${artworkText} at ${locationText}</td>
                    // </table>`
                    concertResultsDomManager.clearSearchResults();
            })
        }
    }
}