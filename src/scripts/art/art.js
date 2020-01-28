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
        <h3>Art Piece</h3><p> ${art.artwork}</p>
        <h3>Artist</h3><p> ${art.first_name} ${art.last_name}</p>
        <h3>Location</h3><p> ${art.location}</p>
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


// const artFactory = (art) => {
//     if (!art.first_name) {
//         art.first_name = ""
//     }

//     if (!art.last_name) {
//         art.last_name = ""
//     }

//     if (!art.description) {
//         return `
//         <section class="artResults">
//         <div><strong>Art Piece:</strong> ${art.artwork}</div>
//         <div><strong>Artist:</strong> ${art.first_name} ${art.last_name}</div>
//         <div><strong>Location:</strong> ${art.location}</div>
//         </section>
//         `
//     } else {
//         return `
//     <section class="artResults">
//     <div><strong>Art Piece:</strong> ${art.artwork}</div>
//     <div><strong>Artist:</strong> ${art.first_name} ${art.last_name}</div>
//     <div><strong>Location:</strong> ${art.location}</div>
//     <div><strong>Description:</strong> ${art.description}</div>
//     </section>
//     `
//     }
// }
