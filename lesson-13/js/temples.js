// store resource URL in a const
const requestURL = "./js/temples.json";
const cards = document.querySelector(".cards");

// basic fetch( method) implementation
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
// validate data received
    .then(function (jsonData) {
        // console.table(jsonData);
        const dirList = jsonData["directory"];
        dirList.forEach(displayDir);
    })

function displayDir(directory) {
    // create elements to add to the document
    let card = document.createElement("section");
    card.className = "cardSection";
    let templeName = document.createElement("h2")
    let imageurl = document.createElement("img")
    let address = document.createElement("p")
    let telephone = document.createElement("p")
    let email = document.createElement("h3")
    let services = document.createElement("p")
    let history = document.createElement("p")
    let ordinanceSchedule = document.createElement("p")
    let sessionSchedule = document.createElement("p")
    let templeClosureSchedule = document.createElement("p")

// add the directories templeName to the templeName textcontent
    templeName.textContent = directory.templeName;
    address.innerHTML = directory.address
    imageurl.setAttribute('src', directory.imageurl);
    imageurl.setAttribute('alt', `${directory.templeName} image`);
    imageurl.setAttribute('loading', 'lazy')
    telephone.innerHTML = directory.telephone
    email.innerHTML = directory.email
    services.innerHTML = `Services: <br></br>${directory.services}`
    history.innerHTML = `History: <br></br>${directory.history}`
    ordinanceSchedule.innerHTML = `Ordinance Schedule: <br></br>${directory.ordinanceSchedule}`
    sessionSchedule.innerHTML = `Session Schedule: <br></br>${directory.sessionSchedule}`
    templeClosureSchedule.innerHTML = `Temple Closure Schedule: <br></br>${directory.templeClosureSchedule}`
// append to the section(card)
    card.appendChild(templeName);
    card.appendChild(imageurl);
    card.appendChild(address);
    card.appendChild(telephone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinanceSchedule);
    card.appendChild(sessionSchedule);
    card.appendChild(templeClosureSchedule);
 
// add to existing HTML div
    cards.appendChild(card);
}