const pulsatingImages = document.querySelectorAll('.homepage-pictures');

function pulseImage(image) {
    image.style.transform = 'scale(1.1)'; 
    setTimeout(() => {
        image.style.transform = 'scale(1)'; 
    }, 200); 
}

pulsatingImages.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        const intervalId = setInterval(() => pulseImage(image), 800);
        image.addEventListener('mouseleave', () => {
            clearInterval(intervalId);
            image.style.transform = 'scale(1)';
        });
    });
});
