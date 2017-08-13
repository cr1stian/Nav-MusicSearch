var results = document.querySelector(".results-container")

var searchBox = document.querySelector("#searchBar").addEventListener('keydown', function(event){

  if(event.keyCode === 13){
    return(displayData(event.target.value));
  }

})

getInfo("")

function getInfo(event){
fetch(`https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=${event}`)
      .then( function(response) {
        return response.json()
        console.log(json)
      }).then(function(data){

              moreInfo(data)

      })
}


function moreInfo(data){
  for(x=0; x<data.length; x++){

  }
}
