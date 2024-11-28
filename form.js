function populateData(data){

    data.forEach((item) => {

    // Add sign-up form content
    if (item.id == "sign-up form") {

        const info = document.getElementById("info");
    
        const contents = document.createElement("p");
        contents.textContent = item.contents;
    
        info.appendChild(contents);

    }

    // Add caption content
    if (item.id == "caption") {

        const info = document.getElementById("slidetext");
    
        const contents = document.createElement("p");
        contents.textContent = item.contents;
    
        info.appendChild(contents);

    }
})
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('form.json')
    .then(response => response.json())
    .then(data => {
        populateData(data)
    })
    .catch(error => console.error("Error fetching JSON data:", error));
});