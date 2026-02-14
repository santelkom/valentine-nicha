document.addEventListener('DOMContentLoaded', () => {
  fetch("./vinyl.svg")
    .then((response) => response.text())
    .then((svg) => {
      const playerContainer = document.getElementById("player-container");
      playerContainer.innerHTML = svg;

      const vinyl = document.querySelector("svg");
      const playButton = document.getElementById("play-button");
      const audio = document.getElementById("love-song");

      const noBtn = document.getElementById("no-btn");
      const yesBtn = document.getElementById("yes-btn");

      let isPlaying = false;

      // PLAY MUSIC
      playButton.addEventListener("click", () => {
        if (!isPlaying) {
          vinyl.style.animation = "spin 2s linear infinite";

          audio.play().catch((err) => {
            console.error("Audio gagal play:", err);
          });

          playButton.textContent = "Pause";
          isPlaying = true;
        } else {
          vinyl.style.animation = "";
          audio.pause();
          playButton.textContent = "Play";
          isPlaying = false;
        }
      });

      // =============================
      // TOMBOL TIDAK KABUR
      // =============================
      document.addEventListener("mousemove", (e) => {
        if (!noBtn) return;

        const rect = noBtn.getBoundingClientRect();
        const distance = Math.hypot(
          e.clientX - (rect.left + rect.width / 2),
          e.clientY - (rect.top + rect.height / 2)
        );

        if (distance < 100) {
          const randomX = Math.random() * (window.innerWidth - 100);
          const randomY = Math.random() * (window.innerHeight - 50);

          noBtn.style.position = "absolute";
          noBtn.style.left = randomX + "px";
          noBtn.style.top = randomY + "px";
        }
      });

      // =============================
      // KLIK IYA
      // =============================
      if (yesBtn) {
        yesBtn.addEventListener("click", () => {
          alert("Hehe tau kok kamu pasti pilih Iya 😘💖");
        });
      }
    })
    .catch((err) => console.error("Error loading SVG:", err));
});