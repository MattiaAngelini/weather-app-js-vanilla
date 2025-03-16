
// L'applicazione dovrebbe mostrare:
// Il nome della città.
// La temperatura attule.
// Una breve descrizione delle condizioni meteorologiche (es. "Sereno", "Pioggia leggera").
// Un'icona che rappresenta le condizioni meteo.

// Aggiungi un'opzione per cercare il meteo in base alla posizione geografica dell'utente (usa l'API di geolocalizzazione del browser).
// Implementa una funzionalità per salvare le città cercate di recente in un array e visualizzarle come una lista.


  function search(){
        let cityChoice = document.getElementById('cityChoice').value
        let card = document.querySelector('.card')
        let cardHeader = document.querySelector('.card-header')
        let cardText = document.querySelector('.card-text')
        let cardIcon = document.querySelector('.img-card')

        fetch(`https://api.weatherapi.com/v1/current.json?key=a6ffe14779c64b6aa9b232703251503&q=${cityChoice}`)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Errore HTTP! Status: ${response.status}`);
        }
        return response.json();
        })
        .then(data => {
        console.log('Risultato:', data);
        card.classList.remove('d-none')
        cardHeader.innerHTML = data.location.name + ' - ' + data.current.temp_c
        cardText.innerHTML = data.current.condition.text
        cardIcon.src = data.current.condition.icon
        })
        .catch(error => {
        console.error('Errore nella richiesta:', error);
        });

  }
