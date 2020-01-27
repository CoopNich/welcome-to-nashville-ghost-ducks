const concertApi = {
    searchNashville() {
      return fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=QYeeKMt1VCARpZ1TbPeuXLh9eUMd0gd7")
        .then(response => response.json());
    }
  };