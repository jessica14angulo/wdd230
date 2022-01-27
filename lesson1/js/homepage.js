//current year
document.addEventListener("DOMContentLoaded", function() { 
    const yrSpan = document.querySelector('#currentyear');
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
  });
//last modified date and hour
const options = {month: "numeric", day:"numeric", year: "numeric", hour12: false, hour:"2-digit", minute:"2-digit", second:"2-digit"};
document.getElementById("lastmodified").textContent = new Date(document.lastModified).toLocaleDateString("en-US",options);