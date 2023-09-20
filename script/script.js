const pulsatingImages = document.querySelectorAll('.homepage-pictures');

function pulseImage(image) {
    image.style.transform = 'scale(1.1)'; 
    setTimeout(() => {
        image.style.transform = 'scale(1)'; 
    }, 200); 
}

function accessibilityToggle() {
    var ac = document.getElementById("accessibility");
    if (ac.disabled === true) {
        ac.disabled = false;
    }
    else {
        ac.disabled = true;
    }
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

window.addEventListener('load', function() {
    var backImage = document.querySelector('.back-image');
    backImage.classList.add('loaded');
});
