var results = document.querySelector(".results-container") //grabbing HTML Elements to use in here

var searchBox = document.querySelector("#searchBar")

searchBox.addEventListener('keydown', function(event){ //adding Event listener for when a keyboard button is pushed

  if(event.keyCode === 13){ //13 is the keycode for Return-Enter

    return(getInfo(event.target.value)); //return is running the function below

  }

})

getInfo("")

function getInfo(event){
fetch(`https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=${event}`) //API address used to grab info
      .then( function(response) {
        return response.json() //returns API in Json format
      }).then(function(data){
              moreInfo(data)

      })
}


function moreInfo(data){ //looping through values in Objects
  for(x=0; x<data.length; x++){
    console.log(data[x].title)
  }
}
