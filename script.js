const videos = document.querySelectorAll('.slideshow video');
let currentIndex = 0;

function showVideo(index) {
    videos.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'block';
            video.play();
        } else {
            video.style.display = 'none';
            video.pause();
            video.currentTime = 0;
        }
    });
}

function nextVideo() {
    currentIndex++;
    if (currentIndex >= videos.length) {
        currentIndex = 0;
    }
    showVideo(currentIndex);
}

setInterval(nextVideo, 5000); // Change slide every 5 seconds
