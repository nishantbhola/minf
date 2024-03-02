document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main-image");
    const thumbnailImages = document.querySelectorAll(".thumbnail");

    thumbnailImages.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            mainImage.src = thumbnail.src;
        });
    });
});

