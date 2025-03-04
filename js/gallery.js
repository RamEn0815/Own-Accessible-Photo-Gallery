/* Name this external file gallery.js */
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!"); // Confirms JS is loaded

    const images = document.querySelectorAll(".preview");

    // Function to update main display on hover/focus
    function upDate(previewPic) {
        console.log("Mouse over image:", previewPic.alt, previewPic.src);

        const imageDiv = document.querySelector("#image");
        imageDiv.innerHTML = previewPic.alt;
        imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    }

    // Function to reset main display on mouse leave/blur
    function unDo() {
        console.log("Mouse left the image, resetting display.");

        const imageDiv = document.querySelector("#image");
        imageDiv.style.backgroundImage = "url('')";
        imageDiv.innerHTML = "Hover over an image below to display here.";
    }

    // Adding event listeners for mouse and keyboard interactions
    images.forEach(image => {
        image.setAttribute("tabindex", "0"); // Ensure accessibility for keyboard navigation
        
        image.addEventListener("mouseover", function() {
            upDate(this);
        });
        
        image.addEventListener("mouseleave", unDo);

        image.addEventListener("focus", function() {
            upDate(this);
        });

        image.addEventListener("blur", unDo);
    });

    console.log("Tabindex attributes added to all images for accessibility.");
});
