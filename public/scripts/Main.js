if (document.querySelector(".slide")) {
    // Check to see if page includes slideshow
    document.addEventListener("DOMContentLoaded", () => {
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                const slideContainer = document.querySelector(".slide");
                const slidesData = data.slides; 
                let currentIndex = 0; 

                slidesData.forEach(slide => {
                    // Create slide image element
                    const img = document.createElement("img");
                    img.src = slide.image;
                    img.alt = slide.caption;
                    img.classList.add("slideimg", "hidden");

                    // Create caption element
                    const caption = document.createElement("div");
                    caption.textContent = slide.caption || "";
                    caption.classList.add("slidetext", "hidden");

                    // Append to the container
                    slideContainer.appendChild(img);
                    slideContainer.appendChild(caption);
                });

                //creates variables to select the slide and caption
                const slides = slideContainer.querySelectorAll(".slideimg");
                const captions = slideContainer.querySelectorAll(".slidetext"); 

                // Hide all slides initially
                function hideAllSlides() {
                    slides.forEach(slide => slide.classList.remove("visible"));
                    captions.forEach(caption => caption.classList.remove("visible"));
                }

                // Show the current slide
                function showSlide(index) {
                    slides[index].classList.add("visible");
                    captions[index].classList.add("visible");
                }

                // Move to the next slide
                function nextSlide() {
                    hideAllSlides(); // Hides previous slide
                    currentIndex = (currentIndex + 1) % slides.length; //indexes by 1
                    showSlide(currentIndex); // Show the new slide
                }

                // Start the slideshow
                function startSlideshow() {
                    hideAllSlides(); // Initialize
                    showSlide(currentIndex); // Show the first slide
                    setInterval(nextSlide, 5000); // Change slide every 5 seconds
                }

                // Initialize the slideshow
                startSlideshow();

                // Update main text and footer text from JSON
                const mainTextElement = document.querySelector(".text1 p");
                if (mainTextElement) {
                    mainTextElement.innerHTML = data.mainText;
                }
                const mainFootElement = document.querySelector("#Teamname");
                if (mainFootElement) {
                    mainFootElement.innerHTML = data.FootText;
                }
            })
        
            .catch(error => console.error("Error loading captions.json:", error));
    });
}

