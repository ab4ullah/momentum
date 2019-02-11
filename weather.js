
    axios({
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=0fc19242574e2e17c7ef77dc07ea9482'
      })
        .then((response) => {
            // const description = response.data.weather[0].description;
            // $('body').append(`<h1>${description}</h1>`);
            $('body').css('color','white');
            const weather = response.data.weather[0].main;
            if(weather === 'Clouds'){
                $('body').append(`<h1 id="one" >☁️</h1>`);
                $('#one').css('position','absolute')
                $('#one').css('left','100px')
                $('#one').css('top','4px')
                $('#one').css('display','inline')
            }
          $('#temp').text(response.data.main.temp + "℃");
          $('#temp').css('color','white');
        //   $('#temp').css('display','inline');
          $('#temp').css('margin-top','0px');
          $('#temp').css('margin-left','8px');
          
        })
        .catch((error) => {
          console.log(error);
        });