const originCityInput = document.querySelector('input[name="origin-city"]');
const destinationCityInput = document.querySelector('input[name="destination-city"]');
const xpInput = document.querySelector('input[name="xp"]');
const goldInput = document.querySelector('input[name="gold"]');
const destinationPersonInput = document.querySelector('input[name="destination-person"]');

document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();
    console.log(originCityInput.value);
});