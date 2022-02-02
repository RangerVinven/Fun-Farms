let imageOn = 0;
let images = document.getElementsByClassName("image");

// Runs the arrow function every 1 and a half seconds
setInterval(() => {
    // Checks if it's displaying the last image
    if(imageOn === images.length-1){

        // If so, display the first image and reset imageOn
        images[0].className = "image";
        images[0].style.transition = "opacity 0.5s ease-out";

        images[images.length-1].className = "image hidden";
        images[images.length-1].style.transition = "opacity 0.5s ease-in";

        imageOn = 0;
    } else {
        // Displays the next image
        images[imageOn + 1].className = "image";
        images[imageOn + 1].style.transition = "opacity 0.5s ease-out";
        
        images[imageOn].className = "image hidden";
        images[imageOn].style.transition = "opacity 0.5s ease-in";

        imageOn++;
    }
}, 1500);

