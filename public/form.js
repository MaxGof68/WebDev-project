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

if(document.querySelector('#contact_submit')){
    let myText = document.querySelector('#text');
    let myComments = document.querySelector('#contact_submit');
    let myForm = document.querySelector('form');
    let myName = document.querySelector('#name');
    let mySurname = document.querySelector('#surname');
    let myEmail = document.querySelector('#email');

    myForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formBody = {
        Name:myName.value,
        Surname:mySurname.value,
        Email:myEmail.value,
        Comments:myComments.value,
        }

    const requestHeaders = {
    "Content-Type": "application/json"}

    fetch("/form", {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(formBody),
        })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
        })
    .then((responsedata) => {
        console.log(responsedata);
        myText.textContent=`Hi ${responsedata.name} ${responsedata.surname}, your message has
        been received, we will contact you at ${responsedata.email}`;
        });
})
}
