var results = document.querySelector(".results-container") //grabbing HTML Elements to use in here
var player = document.querySelector(".music-player")
var searchBox = document.querySelector("#searchBar")

searchBox.addEventListener('keydown', function(event){ //adding Event listener for when a keyboard button is pushed

  if(event.keyCode === 13){ //13 is the keycode for Return-Enter
    results.textContent = ""
    return(getInfo(event.target.value)); //return is running the function below

  }

})


function getInfo(event){
fetch(`https://api.soundcloud.com/users/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=${event}`) //API address used to grab info
      .then( function(response) {
        return response.json() //returns API in Json format
      }).then(function(data){
              var userId = data[0].id

              songData(userId);
      })
}


function songData(userId){ //searching API for track Info
  fetch(`http://api.soundcloud.com/users/${userId}/tracks/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=`)
  .then(function(response){
    return response.json()
  }).then(function(data){
    moreInfo(data)
  })
}





function moreInfo(data){ //looping through values in Objects
  displayResults=""
  for(x=0; x<data.length; x++){

    var id = data[x].id


//Adding onclick function to div
  displayResults += `<div class="w3-card-4" type="click" value=${id} onclick=audio(${id})>
                    <img class="albumArt" src="${data[x].artwork_url}"/>
                    <h4>${data[x].title}</h4>
                    <p>${data[x].user.username}</p>
                    </div>`
  }

  results.insertAdjacentHTML('afterbegin', displayResults);//appending information to HTML
}



function audio(id){ //adding source to audio player
  var song = document.querySelector("audio")
  song.src = "https://api.soundcloud.com/tracks/"+id+"/stream?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f"
  console.log(id)
}
