// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];
    var select = document.getElementById('planets');

planets.forEach(function(planet){
    document.createElement('option');
    var option = document.createElement('option');
    option.value = planet[0].toLowerCase();
    option.text = planet[0];select.appendChild(option);
    

})
;

var button = document.getElementById('calculate-button');
button.addEventListener('click', function(){
    var userWeight = document.getElementById('user-weight').value;
    var planetSelect = document.getElementById('planets').value;
    var planetWeight = planets.find(function(planet){
        return planet[0].toLowerCase() === planetSelect;
    });

    var finalWeight = userWeight * planetWeight[1];
     
    document.getElementById('output').innerHTML = "If you were on " + planetWeight[0] + ", you would weigh " + finalWeight.toFixed(2) + "lbs!";
});



