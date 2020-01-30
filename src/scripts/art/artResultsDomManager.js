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
            <h3><a target="_blank" href="${art.page_link.url}">More Info</a></h3>
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
        <h3><a target="_blank" href="${art.page_link.url}">More Info</a></h3>
        <button class="artResults__button">Save</button>
        <hr>
        </section>
        `
        }
    },
    renderArt(searchResults) {

        const containter = document.querySelector(".searchResults");
        containter.innerHTML = "";
        const input = document.getElementById("art__input");
        input.value = "";
        // for (let i = 0; i < searchResults.length; i++) {
        //     const artHtml = this.artFactory(searchResults[i]);
        //     containter.innerHTML += artHtml
        // }

        searchResults.forEach(art => {
        const artHtml = this.artFactory(art);
        containter.innerHTML += artHtml;
        });

        if (searchResults.length === 0) {
            
        }

        artSaveEventManager.addSaveClickEventListener()
    }

}