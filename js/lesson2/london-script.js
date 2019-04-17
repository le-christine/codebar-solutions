// used in london.html
var london = {
  name: 'London',
  population: '83083969',
  tallestBuilding: {
    name: 'Shard',
    height: '310m'
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 350000,
  olympics: [1908, 1948, 2012],
  updatePopulation: function(newPopulation) {
    this.population = newPopulation;
  }
};

function displayPopulation() {
  // Make a new <p></p> for population. This is not attached to the DOM yet.
  var population = document.createElement('p');

  // Make some text content to put into you <p></p>
  var content = document.createTextNode('Population: ' + london.population);

  // Put the text content into the <p></p>.
  population.appendChild(content);

  // Finally the population can be appended to the body, and will become visible in the browser.
  document.body.appendChild(population);

}

function displayTallestBuilding() {
  var building = document.createElement('p');
  var content = document.createTextNode('Tallest Building: ' + london.tallestBuilding.name + ' is ' + london.tallestBuilding.height + ' tall.');
  building.appendChild(content)
  document.body.appendChild(building);
}

function displayUniversities() {
  var uni = document.createElement('p');
  var content = document.createTextNode('Number of universities: ' + london.numberOfUniversities);
  uni.appendChild(content);
  document.body.appendChild(uni);
}

function displayRent() {
  var rent = document.createElement('p');
  var content = document.createTextNode('Average cost of rent: ' + london.averageRent);
  rent.appendChild(content);
  document.body.appendChild(rent);
}

function displayTubePassengerJourney() {
  var tubePassengers = document.createElement('p');
  var content = document.createTextNode('Number of daily tube passengers: ' + london.dailyTubePassengerJourney);
  tubePassengers.append(content);
  document.body.appendChild(tubePassengers);
}

function displayOlympics() {
  var olympicYears = document.createElement('p');
  var content = document.createTextNode('Years hosting the Olympics: ' + london.olympics);
  olympicYears.append(content);
  document.body.appendChild(olympicYears);
}
