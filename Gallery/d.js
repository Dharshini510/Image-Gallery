let currentImageIndex = 0;
const images = [
    'ee.jpg',
    'fr.jpg',
    'img.jpg',
    'Meesho-grocery.jpg', // Add more image paths if necessary
];

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById('galleryImage').src = images[currentImageIndex];
}

function selectImage(index) {
    currentImageIndex = index;
    document.getElementById('galleryImage').src = images[currentImageIndex];
}
