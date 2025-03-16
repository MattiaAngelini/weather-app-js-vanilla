// L'applicazione dovrebbe mostrare:
// Il nome della città.
// La temperatura attule.
// Una breve descrizione delle condizioni meteorologiche (es. "Sereno", "Pioggia leggera").
// Un'icona che rappresenta le condizioni meteo.
// Implementa una funzionalità per salvare le città cercate di recente in un array e visualizzarle come una lista.

const userChoices = []

function search(){
    const cityChoice = document.getElementById('cityChoice').value
    const card = document.querySelector('.card')
    const cardHeader = document.querySelector('.card-header')
    const cardText = document.querySelector('.card-text')
    const cardIcon = document.querySelector('.img-card')
    const searched = document.getElementById('searched')
    const li = document.createElement('li')
   //chiamata api
    fetch(`https://api.weatherapi.com/v1/current.json?key=a6ffe14779c64b6aa9b232703251503&q=${cityChoice}`)
    .then(response => {
    if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
    console.log('Risultato:', data);
    
    //dopo chiamata compare card e viene popolata con dati API
    card.classList.remove('d-none')
    cardHeader.innerHTML = data.location.name + ' - ' + data.current.temp_c
    cardText.innerHTML = data.current.condition.text
    cardIcon.src = data.current.condition.icon
    
    //pusho in un array vuoto i name delle città cercate e li stampo in una lista
    userChoices.push(data.location.name)
    for (let i = 0; i < userChoices.length; i++) {
        li.innerHTML = userChoices[i]
        searched.appendChild(li)
    }
   
    })
    .catch(error => {
    console.error('Errore nella richiesta:', error);
    });
}
