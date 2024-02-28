/**
 * Initializes the slideshow by setting the initial slide index and calling the showSlides function.
 * @param {number} slideIndex - The initial slide index.
 */
let slideIndex = 1;
showSlides(slideIndex);

/**
 * Moves to the next or previous slide.
 * @param {number} n - The number of slides to move. Positive value for next slide, negative value for previous slide.
 */
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

/**
 * Displays a specific slide.
 * @param {number} n - The index of the slide to display.
 */
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

/**
 * Displays the slides and updates the active dot.
 * @param {number} n - The index of the slide to display.
 */
function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1)
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
