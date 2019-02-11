
    axios({
        method: 'get',
        url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
      })
        .then((response) => {
            let v = response.data.quoteText;
            $('body').append(`<p>${v}</p>`);
            $('p').css('text-align','center');
            $('p').css('margin-top','270px');

       
        })
        .catch((error) => {
          console.log(error);
        });

    let time = moment().format("h:mm A");
    $('body').append(`<h2>${time}</2>`);
    $('h2').css('text-align','center');
    $('h2').css('font-size','80px');
    $('h2').css('margin-top','170px');

