let sectionElement = document.querySelector('#Goals')

if (sectionElement != null) 
    {
        document.addEventListener('DOMContentLoaded', ()=> {
                fetch('goals.json')
                .then(response => response.json())
                .then(responseData =>{
                    console.log(responseData);
                    for (item of responseData) {
                        const myGoals = document.createElement('article');
                        const imageElement = document.createElement('img');
                        const myTitle = document.createElement('h4');
                        const myGoal = document.createElement('p');
                        sectionElement.appendChild(myGoals)
                        myGoals.setAttribute('class', 'goals')
                        imageElement.src = item.imageURL;
                        imageElement.alt = item.alt;
                        myGoal.textContent = `${item.goal}`;
                        myTitle.textContent = `${item.title}`;
                        myGoals.appendChild(imageElement);
                        myGoals.appendChild(myTitle);
                        myGoals.appendChild(myGoal);
                    }
                })
            })
    }