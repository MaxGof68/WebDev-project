if (document.querySelector(".slideimg")) {
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
                    img.classList.add("slideimg");
                    img.style.display = "none"; // Initially hide all slides

                    // Create caption element
                    const caption = document.createElement("div");
                    caption.classList.add("slidetext");
                    caption.textContent = slide.caption;
                    caption.style.display = "none"; // Initially hide all captions

                    // Append to the container
                    slideContainer.appendChild(img);
                    slideContainer.appendChild(caption);
                });

                const slides = document.querySelectorAll(".slideimg"); // Select all slideshow images
                const captions = document.querySelectorAll(".slidetext"); // Select all captions

                // Hide all slides initially
                function hideAllSlides() {
                    slides.forEach(slide => (slide.style.display = "none"));
                    captions.forEach(caption => (caption.style.display = "none"));
                }

                // Show the current slide
                function showSlide(index) {
                    slides[index].style.display = "block"; // Show image
                    captions[index].style.display = "block"; // Show caption
                }

                // Move to the next slide
                function nextSlide() {
                    hideAllSlides(); // Hide current slides
                    currentIndex = (currentIndex + 1) % slides.length; 
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

                // Update main text from JSON
                const mainTextElement = document.querySelector(".text1 p");
                if (mainTextElement) {
                    mainTextElement.innerHTML = data.mainText;
                }
            })
            .catch(error => console.error("Error loading captions.json:", error));
    });
}
