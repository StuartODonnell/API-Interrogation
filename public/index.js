const app = function(){

  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

}

const makeRequest = function (url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const requestComplete = function (){
  if(this.status !== 200) return;
  const beers = JSON.parse(this.response);
  // populateList(countries);
  populateDropDown(beers);
}

// const populateList = function(countries){
//
//   const div = document.querySelector("#country-data")
//   countries.forEach(function(country){
//     const li = document.createElement("li");
//     li.textContent = country.name + " Capital: " + country.capital;
//     div.appendChild(li);
//   })
//
// }

const populateDropDown = function(beers){

  const select = document.querySelector("#beer-select");
  beers.forEach(function(beer){
    const option = document.createElement("option");
    option.textContent = beer.name;
    option.value = beer.name;
    select.appendChild(option);
  })

  select.addEventListener("change", function(){
    populateBeerData(beers);
  })

}

const populateBeerData = function(beers){
  const select = document.querySelector("#beer-select");
  const div = document.querySelector("#beer-data")
  div.innerHTML = "";
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');

  const a1 = document.createElement('img');


  selectedBeer = select.value;
  result = null;
  beers.forEach(function(beer){
    if(beer.name === selectedBeer){
      result = beer;
    }
  })

  p.textContent = result.name;
  p2.textContent = `The description of ${result.name}  is ${result.description}`;
  p3.textContent = `The tagline of ${result.name} is ${result.tagline}`;
  // p4.textContent = `Countries that border ${result.name} are ${result.borders}`;
  // p5.textContent = "DRAPEAU SANS FRONTIERS"
  a1.src = result.image_url;
  a1.width = 500;
  a1.height = 1000;


  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(p3);
  // div.appendChild(p4);
  // div.appendChild(p5);
  div.appendChild(a1);

  // div.appendChild(p4);

}

window.addEventListener('load', app);
