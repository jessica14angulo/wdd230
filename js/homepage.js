const options = {month: "numeric", day:"numeric", year: "numeric", hour:"2-digit", minute:"2-digit", second:"2-digit"};
document.getElementById("lastmodified").textContent = new Date(document.lastModified).toLocaleDateString("en-US",options);