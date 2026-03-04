window.onload = () => {
    document.body.classList.remove("container");

    // ambil elemen slider setelah bunga selesai load
    slides = document.getElementById("slides");
};

let currentSlide = 0;
let slides;
let totalSlides = 8; // ganti sesuai jumlah slide kamu

function updateSlide() {
    if (!slides) return;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}
function startExperience() {
    // hilangkan pembuka
    document.getElementById("opening").style.display = "none";

    // mulai lagu kalau ada
    const audio = document.getElementById("lagu");
    if (audio) {
        audio.play();
    }
}