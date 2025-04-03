// Define the images
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

// Define the current image index
let currentIndex = 0;

// Get the image element
const slide = document.getElementById("slide");

// Function to change the image
function changeImage() {
  // Increment the current index
  currentIndex++;

  // Check if we've reached the end of the images array
  if (currentIndex >= images.length) {
    // Reset the index to 0
    currentIndex = 0;
  }

  // Update the image source
  slide.src = images[currentIndex];
}
