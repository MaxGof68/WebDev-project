// JavaScript for the slideshow
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slideimg"); // Select all slideshow images
    const captions = document.querySelectorAll(".slidetext"); // Select all captions
    let currentIndex = 0; // Start with the first slide

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
        currentIndex = (currentIndex + 1) % slides.length; // Move to next slide, loop back if at the end
        showSlide(currentIndex); // Show the new slide
    }

    // Start the slideshow
    function startSlideshow() {
        hideAllSlides(); // Initialize
        showSlide(currentIndex); // Show the first slide
        setInterval(nextSlide, 5000); // Change slide every 3 seconds
    }

    // Initialize the slideshow
    startSlideshow();
});