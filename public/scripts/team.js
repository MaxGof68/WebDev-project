function createTeamCards(data) {
    const teamInfo = document.getElementById("teamInfo");

    teamInfo.innerHTML = '';

    data.forEach((member, index) => {
    const column = document.createElement("div");
    column.classList.add("column");
    

    // Add names
    const name = document.createElement("h3");
    name.textContent = member.name || `Team Member ${index + 1}`;

    // Add image

    const image = document.createElement("img");
    image.src = member.imageURL;
    image.alt = member.alt;

    // Add Bio
    const details = document.createElement("p");
        details.innerHTML = `
            <strong>Role:</strong> ${member.role}<br>
            <strong>Responsibility:</strong> ${member.responsibility}<br>
            <strong>Contributions:</strong> ${member.contributions}
        `;

    column.appendChild(name);
    column.appendChild(image);
    column.appendChild(details);
    teamInfo.appendChild(column);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    fetch('Team.json')
        .then(response => response.json())
        .then(data => {
            // Process team cards
            if (data.team) {
                createTeamCards(data.team);
            }

            // Set footer text
            if (data.FootText) {
                const mainFootElement = document.querySelector("#Teamname");
                if (mainFootElement) {
                    mainFootElement.innerHTML = data.FootText; // Set footer text
                }
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});

