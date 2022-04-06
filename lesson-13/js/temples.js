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
    // let like = document.createElement("button")
  let likeButton = document.createElement("button")
  likeButton.onclick = saveData;

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
    likeButton.innerHTML = `Like`;
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


    

    function saveData(){
      localStorage.setItem("server", clicked);
      let storedValue = localStorage.getItem("server");
    card.append(likeButton);

    
}
    

    
// add to existing HTML div
    cards.appendChild(card);
}


// function likeTemple(templeName) {
//       var templeToLike = document.querySelectorAll(`[temp-id="${templeName}"]`);
//       templeToLike[0].textContent = "Liked";
//       templeToLike[0].setAttribute('onclick', `unlikeTemple(${templeName})`)
  
//       localStorage.setItem(`${templeName}`, 'true');
//   }
  
//   function unlikeTemple(templeName) {
//       var templeToLike = document.querySelectorAll(`[temp-id="${templeName}"]`);
//       templeToLike[0].textContent = "Like";
//       templeToLike[0].setAttribute('onclick', `likeTemple(${templeName})`)
  
//       localStorage.setItem(`${templeName}`, 'false');
//   }
//like button
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1514519048826987&version=v2.0";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));

// const like = document.querySelector(".cards")
// like.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.getElementById("like").classList.toggle("clicked");
//     document.querySelector(".likeW").textContent = "You Liked Salt Lake City Temple!"
//     // add localStorage for Liked Salt
//     const storage = document.querySelector("#like");
//     if(storage.classList.contains("clicked")) {
//         localStorage.setItem(storage, 'true');
//     } else {
//         localStorage.removeItem(storage, 'true');
//     }
// })
// function toggleCard() {
//     document.getElementById("cardToggle").style.display = "grid";
//     document.getElementById("listToggle").style.display = "none";
// }
// function toggleList() {
//     document.getElementById("listToggle").style.display = "block";
//     document.getElementById("cardToggle").style.display = "none";
// }


// like.addEventListener("click", function (e) {
//     e.preventDefault();
//     // add localStorage for Liked Salt
//     const storage = document.like;
//     if(storage.contains("click")) {
//         localStorage.setItem(storage, 'true');
//     } else {
//         localStorage.removeItem(storage, 'true');
//     }
// })   

//Liking function
    // var likedButton = document.createElement('button');
    // likedButton.setAttribute('temp-id', `${directory.templeName}`);

    // //If local storage liked, then turn this to "liked"
    // if (localStorage.getItem(`${templeName}`) == 'true') {            
    //     likedButton.textContent = "Liked";
    //     likedButton.setAttribute('onclick', unlikeTemple(templeName))
    // }
    // else {
    //     likedButton.textContent = "Like";
    //     likedButton.setAttribute('onclick', likeTemple(templeName))
    // }