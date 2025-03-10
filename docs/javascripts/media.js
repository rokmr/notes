document.addEventListener('DOMContentLoaded', function() {
    // Handle GIF play/pause
    const playableGifs = document.querySelectorAll('.playable');
    playableGifs.forEach(gif => {
        let playing = true;
        const staticSrc = gif.src.replace(/\.gif$/, '_static.jpg');
        
        gif.addEventListener('click', function() {
            if(playing) {
                gif.setAttribute('data-gif', gif.src);
                gif.src = staticSrc;
            } else {
                gif.src = gif.getAttribute('data-gif');
            }
            playing = !playing;
        });
    });
}); 