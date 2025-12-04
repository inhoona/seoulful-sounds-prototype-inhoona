// Korean Song Recommendation Data
const songDatabase = {
    happy: {
        title: "사랑은 은하수 다방에서",
        artist: "10cm",
        album: "https://i.scdn.co/image/ab67616d0000b273bef2a7af38d4e015edc4745b",
        description: "A bright, bubbly indie track that lifts your spirits instantly.",
        youtube: "https://www.youtube.com/watch?v=ARJd6mB5tDQ"
    },

    sad: {
        title: "Rain",
        artist: "태연 (Taeyeon)",
        album: "https://i.scdn.co/image/ab67616d0000b27374dfdc0b6f1a2fcaad4acf90",
        description: "Emotional vocals and soft instrumentals perfect for reflective moods.",
        youtube: "https://www.youtube.com/watch?v=iW5hA6YH5bU"
    },

    excited: {
        title: "Next Level",
        artist: "aespa",
        album: "https://i.scdn.co/image/ab67616d0000b273b2f99c9a6525a68d5f6b8df2",
        description: "High energy, intense beats — perfect when you're hyped.",
        youtube: "https://www.youtube.com/watch?v=4TWR90KJl84"
    },

    sleepy: {
        title: "밤편지 (Through the Night)",
        artist: "아이유 (IU)",
        album: "https://i.scdn.co/image/ab67616d0000b273ae0c84f6227eac281ddf4b05",
        description: "Soft, warm vocals that feel like a lullaby.",
        youtube: "https://www.youtube.com/watch?v=BzYnNdJhZQw"
    },

    studious: {
        title: "휴식 (Rest)",
        artist: "폴킴 (Paul Kim)",
        album: "https://i.scdn.co/image/ab67616d0000b273b64cbea67276c9d8898649b2",
        description: "Calm and steady — ideal background music while focusing.",
        youtube: "https://www.youtube.com/watch?v=-pI9O46xCzA"
    },

    surprised: {
        title: "Love Dive",
        artist: "IVE",
        album: "https://i.scdn.co/image/ab67616d0000b273e1bb5a725551f04e6ac84958",
        description: "A bold, stunning track perfect for unexpected feelings.",
        youtube: "https://www.youtube.com/watch?v=Y8JFxS1HlDo"
    },

    motivated: {
        title: "봄날 (Spring Day)",
        artist: "BTS",
        album: "https://i.scdn.co/image/ab67616d0000b273d55a3bc38d3a084c9a0cc004",
        description: "Warm and emotional — gives you the push you need.",
        youtube: "https://www.youtube.com/watch?v=xEeFrLSkMm8"
    },

    romantic: {
        title: "Love, Maybe",
        artist: "멜로망스 (MeloMance)",
        album: "https://i.scdn.co/image/ab67616d0000b27311e6a968639a6a39aea20e39",
        description: "Soft, sweet, and dreamy — perfect for romantic moods.",
        youtube: "https://www.youtube.com/watch?v=Fp8msa5uYsc"
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

function showSong(mood) {
    const data = songDatabase[mood];

    document.getElementById("song-title").textContent = data.title;
    document.getElementById("artist").textContent = data.artist;
    document.getElementById("description").textContent = data.description;
    document.getElementById("album-art").src = data.album;

    const link = document.getElementById("youtube-link");
    link.href = data.youtube;

    document.getElementById("result").classList.remove("hidden");
}