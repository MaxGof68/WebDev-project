document.addEventListener("DOMContentLoaded", () => {
    // Fetch JSON data
    fetch('form.json')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        
        // Update the footer text using the FootText property from JSON
        const mainFootElement = document.querySelector("#Teamname");
        if (mainFootElement) {
            mainFootElement.innerHTML = data.FootText;
        }
            
        // Update the sign-up form content using the SignUpForm property from JSON
        const info = document.querySelector("#info");
        if (info) {
            info.innerHTML = data.SignUpForm;
        }

        // Update the slide caption using the caption property from JSON
        const caption = document.querySelector("#slidetext");
        if (caption) {
            caption.innerHTML = data.caption;
        }
    })
    .catch(error => console.error("Error fetching JSON data:", error)); // log error if JSON fetching fails
});

// Check if the submit button for the contact form exists
if (document.querySelector('#contact_submit')) {
    let myText = document.querySelector('#text'); // Element to display feedback messages
    let myComments = document.querySelector('#contact_submit'); // Comments input
    let myForm = document.querySelector('form'); // The form element
    let myName = document.querySelector('#name');
    let mySurname = document.querySelector('#surname'); 
    let myEmail = document.querySelector('#email'); 

    // event listener to the form for handling form submission
    myForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Gather the form data into an object
        const formBody = {
            Name: myName.value, // Name input field value
            Surname: mySurname.value, // Value from the surname input field
            Email: myEmail.value, // Value from the email input field
            Comments: myComments.value, // Value from the comments input field
        };

        const requestHeaders = {
            "Content-Type": "application/json" 
        };

        // Send the form data using a POST request to "/form" endpoint
        fetch("/form", {
            method: 'POST', // HTTP POST method
            headers: requestHeaders, 
            body: JSON.stringify(formBody), // Convert form data string for JSON
        })
        .then(response => {
            // Response error check
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((responsedata) => {
            // Display response message
            myText.textContent = `Hi ${responsedata.name} ${responsedata.surname}, your message has been received, we will contact you at ${responsedata.email}`;
        });
    });
}
