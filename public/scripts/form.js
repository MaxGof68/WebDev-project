document.addEventListener("DOMContentLoaded", () => {
    fetch('form.json')
    .then(response => response.json())
    .then(data => {
        
        // Load site content from Json
        const mainFootElement = document.querySelector("#Teamname");
        if (mainFootElement) {
            mainFootElement.innerHTML = data.FootText; // Use 'data' here instead of 'responseData'
        }
            
        const info = document.querySelector("#info");
        if (info) {
            info.innerHTML = data.SignUpForm; // Use 'data' here instead of 'responseData'
        }

        const caption = document.querySelector("#slidetext");
        if (caption) {
            caption.innerHTML = data.caption; // Use 'data' here instead of 'responseData'
        }
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
            Name: myName.value,
            Surname: mySurname.value,
            Email: myEmail.value,
            Comments: myComments.value,
        };

        const requestHeaders = {
            "Content-Type": "application/json"
        };

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
            myText.textContent = `Hi ${responsedata.name} ${responsedata.surname}, your message has been received, we will contact you at ${responsedata.email}`;
        });
    });
}
