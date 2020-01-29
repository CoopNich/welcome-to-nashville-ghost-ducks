const baseURL = "https://data.nashville.gov/resource/eviu-nxp6.json";
const getArt = {
    searchArt(searchCriteria) {
    const artURL = baseURL + `?$where=upper(last_name) like '%25${searchCriteria.toUpperCase()}%25'`;
    return fetch(artURL)
        .then(resp => resp.json())
    }
    
}