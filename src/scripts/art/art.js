const getArt = () => {
    const baseURL = "https://data.nashville.gov/resource/eviu-nxp6.json"
    const artURL = baseURL + ``
    fetch(artURL)
        .then(resp => resp.json())
        .then(parsedArt => {
            renderArt(parsedArt)
        });
}

const searchEventManager = {

    addSearchClickEventListener() {
        console.log("add search click event test")
        const search = document.getElementById("art__button")
        search.addEventListener("click", () => {
            console.log("button clicked")
            const input = document.getElementById("art__input")
            const searchCriteria = input.value 
            const searchResultPromise = getArt
        })
    }
}

const artFactory = (art) => {
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
}



const renderArt = (art) => {
    const containter = document.querySelector(".searchResults");
    art.forEach(art => {
    const artHtml = artFactory(art);
    containter.innerHTML += artHtml;
    });
}
getArt();