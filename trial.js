fetch('https://api.openweathermap.org/data/2.5/weather?q={Hyderabad}&appid=ede1be2bb8d510eab027dc286e7a6248').then(response => response.json())(data => console.log(data)).catch(error => {
        // Oh no! If something goes wrong and the weather can't be fetched, this will show an error message.
        alert('Error fetching weather:', error);
      });