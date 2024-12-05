let sectionElement = document.querySelector('#goals');

if (sectionElement != null) {
    document.addEventListener('DOMContentLoaded', () => {
        fetch('goals.json')
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);

                // Access the Goals array from the JSON data
                const goals = responseData.Goals;

                // Iterate through the Goals array
                goals.forEach(goal => {
                    // Create HTML elements for each goal
                    const myGoals = document.createElement('article');
                    const imageElement = document.createElement('img');
                    const myTitle = document.createElement('h4');
                    const myGoal = document.createElement('p');
                    const myTarget = document.createElement('ul');
                    const myLink = document.createElement('a');

                    // Append article to the section element
                    sectionElement.appendChild(myGoals);

                    // Set the class of the element for styling
                    myGoals.setAttribute('class', 'goals');

                    // Populate the content of the elements
                    imageElement.src = goal.imageURL;
                    imageElement.alt = goal.alt;
                    myTitle.textContent = goal.title;
                    myGoal.textContent = goal.goal;
                    myLink.textContent = goal.link;
                    myLink.href = goal.linkURL;

                    // Populate the targets list
                    goal.targets.forEach(target => {
                        const listItem = document.createElement('li');
                        listItem.textContent = target;
                        myTarget.appendChild(listItem);
                    });

                    // Append the elements to the article
                    myGoals.appendChild(imageElement);
                    myGoals.appendChild(myTitle);
                    myGoals.appendChild(myGoal);
                    myGoals.appendChild(myTarget);
                    myGoals.appendChild(myLink);
                });

                // Update the footer text
                const mainFootElement = document.querySelector("#Teamname");
                if (mainFootElement) {
                    mainFootElement.innerHTML = responseData.FootText;
                }
            })
            .catch(error => console.error("Error fetching JSON data:", error));
    });
}
