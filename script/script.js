// Global variable to track the last selected mood.
// Declared at the top to ensure it's available globally.
window.currentMood = null;

// Korean Song Recommendation Data
const songDatabase = {
    happy: {
        description: "A bright, bubbly indie track that lifts your spirits instantly. Playing a curated playlist.",
        playlistId: "PLRzQGcdMDI5SI_nz0OY027JmLdbRVhhot"
    },

    sad: {
        description: "Emotional vocals and soft instrumentals perfect for reflective moods. Playing a curated playlist.",
        playlistId: "PLRzQGcdMDI5QAwie5hLLXZVn5q3tqJyvt"
    },

    excited: {
        description: "High energy, intense beats — perfect when you're hyped. Playing a curated playlist.",
        playlistId: "PLRzQGcdMDI5R5AN6qMhE5PBbBtbYM_AzZ"
    },

    sleepy: {
        description: "Soft, warm vocals that feel like a lullaby. Playing a curated playlist.",
        playlistId: "PLRzQGcdMDI5RLI3IYphtbilAu-rdi2ZUf"
    },

    studious: {
        description: "Calm and steady — ideal background music while focusing. Playing a curated playlist.",
        playlistId: "PLRzQGcdMDI5SQFZbPkwyoaWTLdRLhaymp"
    },

    surprise: {
        description: "A bold, stunning track perfect for unexpected feelings. Playing a curated playlist.",
        playlistId: "PLRzQGcdMDI5R6GvCEGjdwOUqkYrFoEFPi"
    },

    motivated: {
        description: "Warm and emotional — gives you the push you need. Playing a curated playlist.",
        playlistId: "PLRzQGcdMDI5Qz_bLWmh0qhVh038XFX36K"
    },

    romantic: {
        description: "Soft, sweet, and dreamy — perfect for romantic moods. Playing a curated playlist.",
        playlistId: "PLRzQGcdMDI5QHN2u74dPt41NH8AjxyS3d"
    }
};

// Handle Mood Button Clicks
const buttons = document.querySelectorAll(".mood-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const mood = btn.dataset.mood;
        showSong(mood);
    });
});

/**
 * Updates the recommendation card, embeds the playlist, and stores the current mood.
 * * IMPORTANT: This function no longer attempts to set song-title or artist 
 * because those fields were removed from the songDatabase, preventing runtime errors.
 * * @param {string} mood - The mood selected by the user.
 */
function showSong(mood) {
    // 1. Set the global mood variable immediately
    window.currentMood = mood; 

    const data = songDatabase[mood];
    
    // Update Text Content
    // NOTE: If you add title/artist back to your database, uncomment these lines:
    // document.getElementById("song-title").textContent = data.title; 
    // document.getElementById("artist").textContent = data.artist;
    document.getElementById("description").textContent = data.description;

    // --- Start Playlist Embed Logic ---
    const embed = document.getElementById("youtube-embed");
    const playlistId = data.playlistId; 
    
    // Construct the standard YouTube embed URL for a playlist (videoseries)
    const embedSrc = `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1&rel=0&shuffle=1&widget_referrer=${window.location.href}`; 
    embed.src = embedSrc;

    // Handle 'Play on YouTube' Link Button
    const link = document.getElementById("youtube-link");
    link.href = `https://www.youtube.com/playlist?list=${playlistId}`; 
    
    // Show the result section
    document.getElementById("result").classList.remove("hidden");
    
    // Optional: Scroll to the result section for better UX
    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}

// Function to handle the "Next Song" button click
function handleNextSong() {
    // 1. Check if a mood has been selected
    if (window.currentMood) {
        // 2. Re-run showSong, which reloads the iframe and triggers a new shuffle start
        showSong(window.currentMood); 
    }
}

// Attach Event Listener for the Next Song button AFTER the DOM content has loaded
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById("next-song-btn");
    
    // The if(nextBtn) ensures we don't try to add a listener if the button isn't found in HTML
    if (nextBtn) {
        nextBtn.addEventListener('click', handleNextSong);
    }
});