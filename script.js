const table = document.querySelector("table");
const originCityInput = document.querySelector('input[name="origin-city"]');
const destinationCityInput = document.querySelector('input[name="destination-city"]');
const xpInput = document.querySelector('input[name="xp"]');
const goldInput = document.querySelector('input[name="gold"]');
const destinationPersonInput = document.querySelector('input[name="destination-person"]');
const objectsInput = document.querySelector('select');
const descriptionInput = document.querySelector('textarea');
const minLevelInput = document.querySelector('input[name="min-level"]');
const startDateInput = document.querySelector('input[name="start-date"]');
const endDateInput = document.querySelector('input[name="end-date"]');

const pendingText = document.querySelector('p');

let missionCount = 0;

const missionList = document.querySelector("ol");

function addMission( originInputCityValue,
                     destinationInputCityValue,
                     xpInputValue,
                     goldInputValue,
                     destinationPersonInputValue,
                     objectsInputValue,
                     minLevelInputValue,
                     descriptionInputValue,
                     startDateInputValue,
                     endDateInputValue ){



    pendingText.textContent = "";
    const row = document.createElement("tr")
    
    let index = document.createElement("td");
    const originCity = document.createElement("td");
    const destinationCity = document.createElement("td");
    const xp = document.createElement("td");
    const gold = document.createElement("td");
    const destinationPerson = document.createElement("td");
    const object = document.createElement("td");
    const minLevel = document.createElement("td");
    const description = document.createElement("td");
    const startDate = document.createElement("td");
    const endDate = document.createElement("td");

    index.textContent             = ++missionCount;
    originCity.textContent        = originInputCityValue;
    destinationCity.textContent   = destinationInputCityValue;
    xp.textContent                = xpInputValue;
    gold.textContent              = goldInputValue;
    destinationPerson.textContent = destinationPersonInputValue;
    object.textContent            = objectsInputValue;
    minLevel.textContent          = minLevelInputValue;
    description.textContent       = descriptionInputValue;
    startDate.textContent         = startDateInputValue;
    endDate.textContent           = endDateInputValue;
    
    row.appendChild(index);
    row.appendChild(originCity);
    row.appendChild(destinationCity);
    row.appendChild(xp);
    row.appendChild(gold);
    row.appendChild(destinationPerson);
    row.appendChild(object);
    row.appendChild(minLevel);
    row.appendChild(description);
    row.appendChild(startDate);
    row.appendChild(endDate);

    table.appendChild(row)
}


document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();

    addMission( originCityInput.value,
                destinationCityInput.value,
                xpInput.value,
                goldInput.value,
                destinationPersonInput.value,
                objectsInput.value,
                minLevelInput.value,
                descriptionInput.value,
                startDateInput.value,
                endDateInput.value,
                missionList );
});

