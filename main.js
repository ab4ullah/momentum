function imageSuccess(response) {
    console.log(response.data.urls.regular);
    $('body').attr('background',response.data.urls.regular);
    $('body').css('background-repeat','no-repeat');
    $('body').css('background-size','cover');
  }
  
  function imageFail(error) {
    console.log(error);
  }
  
  axios({
    method: "get",
    url: "https://api.unsplash.com/photos/random?client_id=bc8e8c2f19211c8ffb7eee8da2542ba3f5b37d53ea89f3a9c932c4cc2ef9cbf7",
  })
    .then(imageSuccess)
    .catch(imageFail);






 