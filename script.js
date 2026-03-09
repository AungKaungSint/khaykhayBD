var typed = new Typed('#typed', {
    strings: [
        "> loading system...",
        "> access_granted",
        "> hi [Nang Yu Yu Khay]...",
        "> today is a very special day.",
        "> i made you this computer program...",
        "> Your presence is ethereal. ❤️"
    ],
    typeSpeed: 70,
    showCursor: false,
    onComplete: () => {
        setTimeout(() => {
            // Fade out terminal
            document.getElementById('terminal').style.display = 'none';
            
            // Show surprise and change background
            const surprise = document.getElementById('surprise');
            surprise.classList.add('visible');
            
            // Use the dark color from your script
            document.body.style.backgroundColor = "#111010"; 
            document.body.style.overflow = "auto";

            // --- AUDIO FIX START ---
            const music = document.getElementById('birthday-song');
            
            // Function to try playing
            const startMusic = () => {
                music.play().then(() => {
                    // Once playing, remove the click listener
                    window.removeEventListener('click', startMusic);
                    window.removeEventListener('touchstart', startMusic);
                }).catch(err => console.log("Playback waiting for interaction..."));
            };

            // Try to play immediately
            startMusic();

            // Fallback: Play on first click or tap anywhere on the screen
            window.addEventListener('click', startMusic);
            window.addEventListener('touchstart', startMusic);
            // --- AUDIO FIX END ---
            
        }, 1500); //
    }
});