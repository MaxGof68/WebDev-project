let sectionElement = document.querySelector('#goals')

if (sectionElement != null) 
    {
        document.addEventListener('DOMContentLoaded', ()=> {
                fetch('goals.json')
                .then(response => response.json())
                .then(responseData =>{
                    console.log(responseData);
                    for (let item of responseData) {

                        // creating html elements
                        const myGoals = document.createElement('article');
                        const imageElement = document.createElement('img');
                        const myTitle = document.createElement('h4');
                        const myGoal = document.createElement('p');
                        const myTarget = document.createElement('ul');

                        // appending article to html page element
                        sectionElement.appendChild(myGoals)

                        // set the class of the element to control presentation
                        myGoals.setAttribute('class', 'goals')

                        // controlling the content of the elements
                        imageElement.src = item.imageURL;
                        imageElement.alt = item.alt;
                        myGoal.textContent = `${item.goal}`;
                        myTitle.textContent = `${item.title}`;
                        
                        item.targets.forEach(target => {
                            const listItem = document.createElement('li');
                            listItem.textContent = target;
                            myTarget.appendChild(listItem);
                        });

                        // appending elements to the article element created on the goals page
                        myGoals.appendChild(imageElement);
                        myGoals.appendChild(myTitle);
                        myGoals.appendChild(myGoal);
                        myGoals.appendChild(myTarget);
                    }
                    
                    //error handling
                }).catch(error => console.error("Error fetching JSON data:", error));;
            })
    }