const baseURL = "https://data.nashville.gov/resource/eviu-nxp6.json";
const getArt = {
    searchArt(searchCriteria) {
    const artURL = baseURL + `?$where=last_name like '%25${searchCriteria}%25'`;
    return fetch(artURL)
        .then(resp => resp.json())
        // .then(parsedArt => {
        //     renderArt(parsedArt)
        // });
    }
}

// if (art.last_name.toUpperCase() == searchCriteria.toUpperCase())

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
            <div><strong>Art Piece:</strong> ${art.artwork}</div>
            <div><strong>Artist:</strong> ${art.first_name} ${art.last_name}</div>
            <div><strong>Location:</strong> ${art.location}</div>
            </section>
            `
        } else {
            return `
        <section class="artResults">
        <div><strong>Art Piece:</strong> ${art.artwork}</div>
        <div><strong>Artist:</strong> ${art.first_name} ${art.last_name}</div>
        <div><strong>Location:</strong> ${art.location}</div>
        <div><strong>Description:</strong> ${art.description}</div>
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
        console.log("added search click event listener")

        const search = document.getElementById("art__button")

        search.addEventListener("click", () => {

            console.log("button clicked")

            const input = document.getElementById("art__input")
            const searchCriteria = input.value 
            const searchResultPromise = getArt.searchArt(searchCriteria)
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderArt(searchResults)
            });
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
