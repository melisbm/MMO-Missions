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

const missionList = document.querySelector("ol");

function addMission(originInputCityValue,
                    destinationInputCityValue,
                    xpInputValue,
                    goldInputValue,
                    destinationPersonInputValue,
                    objectsInputValue,
                    minLevelInputValue,
                    descriptionInputValue,
                    startDateInputValue,
                    endDateInputValue,
                    missionList){

    const listItem = document.createElement("li");
    const listTable = document.createElement("table");

    const header = document.createElement("tr")

    const originCityHeader = document.createElement("th");
    const destinationCityHeader = document.createElement("th");
    const xpHeader = document.createElement("th");
    const goldHeader = document.createElement("th");
    const destinationPersonHeader = document.createElement("th");
    const objectHeader = document.createElement("th");
    const minLevelHeader = document.createElement("th");
    const descriptiontHeader = document.createElement("th");
    const startDateHeader = document.createElement("th");
    const endDateHeader = document.createElement("th");

    originCityHeader.textContent        = "Ciutat origen";
    destinationCityHeader.textContent   = "Ciutat destí";
    xpHeader.textContent                = "Experiència";
    goldHeader.textContent              = "Or";
    destinationPersonHeader.textContent = "Persona destí";
    objectHeader.textContent            = "Objecte";
    minLevelHeader.textContent          = "Nivell mínim";
    descriptiontHeader.textContent      = "Descripció";
    startDateHeader.textContent         = "Data començament";
    endDateHeader.textContent           = "Date fi";

    const row = document.createElement("tr")
    
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
    
    header.appendChild(originCityHeader);
    header.appendChild(destinationCityHeader);
    header.appendChild(xpHeader);
    header.appendChild(goldHeader);
    header.appendChild(destinationPersonHeader);
    header.appendChild(objectHeader);
    header.appendChild(minLevelHeader);
    header.appendChild(descriptiontHeader);
    header.appendChild(startDateHeader);
    header.appendChild(endDateHeader);

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

    listTable.appendChild(header);
    listTable.appendChild(row);

    listItem.appendChild(listTable);
    missionList.appendChild(listItem)
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