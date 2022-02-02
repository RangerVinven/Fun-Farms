// Closes the gallery
const closeGallery = () => {
    // document.getElementById("pettingZoo").style.visibility = "hidden";
    document.getElementById("pettingZoo").style.display = "none";
}

// Closes the animal specific gallery (after the user selects an animal in the gallery)
const closeAnimalGallery = () => {
    document.getElementById("specificAnimalGallery").remove();
    openGallery();
}

// Listens for when the "Check It Out!" header is clicked
const openGallery = () => {
    // document.getElementById("pettingZoo").style.visibility = "visible";
    document.getElementById("pettingZoo").style.display = "block";
}

// Opens the gallery of the specific animal
const openSpecificAnimalGallery = (selectedAnimalElement) => {
    // Gets the animal that the user selected
    const animal = selectedAnimalElement.className;

    // Captitalises the animal name (and adds a space if needed)
    let nameToDisplay = "";
    if(animal === "koalaBears") {
        nameToDisplay = "Koala Bears";
    } else {
        nameToDisplay = animal.charAt(0).toUpperCase() + animal.slice(1);
    }

    // Creates the gallery for the specific animal
    let specificAnimalGallery = document.createElement("div");
    specificAnimalGallery.id = "specificAnimalGallery";

    // Creates the title div and the back button
    let title = document.createElement("div");
    title.className = "title";

    let backButton = document.createElement("h1");
    backButton.className = "backButton";

    backButton.addEventListener("click", () => {
        closeAnimalGallery();
    });
    backButton.innerHTML = "&#8678;";
    title.appendChild(backButton);

    // Creates the header of the animal
    let header = document.createElement("h1");
    header.id = "ourAnimalsTitle";
    header.innerHTML = `${nameToDisplay}`;
    title.appendChild(header);
    specificAnimalGallery.appendChild(title);

    // Creates the gallery div (the large and small images)
    let gallery = document.createElement("div");
    gallery.id = "gallery";

    let largeImage = document.createElement("img");
    largeImage.id = "largeImage";
    largeImage.src = `../images/pettingZooAnimals/${animal}/large/${animal}1.jpeg`;
    largeImage.alt = `Big image of ${nameToDisplay}`;
    gallery.appendChild(largeImage);

    // Creates the snall images
    let smallImages = document.createElement("div");
    smallImages.id = "smallImages";

    for (let imageNum = 1; imageNum < 5; imageNum++) {
        let smallImage = document.createElement("img");
        smallImage.className = `image${imageNum}`;
        
        smallImage.addEventListener("click", () => {
            viewAnimalPicture(imageNum, animal);
        });

        smallImage.src = `../images/pettingZooAnimals/${animal}/small/${animal}${imageNum}.jpeg`;
        smallImage.alt = `Small ${nameToDisplay} Image ${imageNum}`;

        smallImages.appendChild(smallImage);
    }

    gallery.appendChild(smallImages);
    specificAnimalGallery.appendChild(gallery)

    // Looks like this
    // <div id="specificAnimalGallery">
    //         <div class="title">
    //             <h1 class="backButton" onclick="closeAnimalGallery()">&#8678;</h1>
    //             <h1 id="ourAnimalsTitle">{ANIMAL NAME}</h1>
    //         </div>

    //     <div id="specificAnimalGallery">
    //         <img id="largeImage" src="../images/pettingZooAnimals/{animal}/large/{animal}1.jpeg" alt="Big {animal}">

    //         <div id="smallImages">
    //             <img class="image1" onclick="viewAnimalPicture(1, {animal})" src="../images/pettingZooAnimals/{animal}/small/{animal}1.jpeg" alt="Small Image Of {animal} 1">
    //             <img class="image2" onclick="viewAnimalPicture(2, {animal})" src="../images/pettingZooAnimals/{animal}/small/{animal}2.jpeg" alt="Small Image Of {animal} 2">
    //             <img class="image3" onclick="viewAnimalPicture(3, {animal})" src="../images/pettingZooAnimals/{animal}/small/{animal}3.jpeg" alt="Small Image Of {animal} 3">
    //             <img class="image4" onclick="viewAnimalPicture(4, {animal})" src="../images/pettingZooAnimals/{animal}/small/{animal}4.jpeg" alt="Small Image Of {animal} 4">
    //         </div>
    //     </div>

    //    </div>
    
    // Spawns the specificAnimalGallery at the end of the content
    const content = document.getElementById("content");
    const pettingZooDiv = document.getElementById("pettingZoo");

    // Opens the specific animal gallery and closes the general gallery (where you pick which animal you want to see images of)
    content.insertBefore(specificAnimalGallery, pettingZooDiv);
    closeGallery();
}

// Changes the large image to the one selected
function viewAnimalPicture(imageNum, animal) {
    // Changes the src of the large image to the large version of the one pressed
    document.getElementById("largeImage").src = `../images/pettingZooAnimals/${animal}/large/${animal}${imageNum}.jpeg`;
}
