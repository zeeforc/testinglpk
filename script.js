// Data untuk slider prasarana
const prasaranaData = [
  {
    title: "Bengkel Las",
    image: "assets/prasarana/bengkel-las.jpg",
    description:
      "Prasarana bengkel las digunakan untuk praktik pengelasan SMAW, dilengkapi meja kerja, mesin las, wearpack, helm las, dan perlengkapan keselamatan lainnya.",
  },
  {
    title: "Ruang Instalasi",
    image: "assets/prasarana/ruang-instalasi.jpg",
    description:
      "Ruang instalasi dipakai untuk praktik rangkaian listrik dan panel, dilengkapi meja, tool rack, toolbox, AC, dan papan praktek instalasi.",
  },
  {
    title: "Ruang Relay & PLC",
    image: "assets/prasarana/ruang-relay.jpg",
    description:
      "Ruang relay dan PLC menyediakan peralatan relay, panel kontrol, komputer, dan perangkat pendukung untuk simulasi sistem otomatisasi industri.",
  },
  {
    title: "Ruang Teori",
    image: "assets/prasarana/teori-1.jpg",
    description:
      "Ruang teori digunakan untuk penyampaian materi, diskusi, dan evaluasi. Dilengkapi LCD, layar, papan tulis, meja, kursi, dan fasilitas presentasi.",
  },
  {
    title: "Ruang Teori",
    image: "assets/prasarana/teori-1.jpg",
    description:
      "Ruang teori digunakan untuk penyampaian materi, diskusi, dan evaluasi. Dilengkapi LCD, layar, papan tulis, meja, kursi, dan fasilitas presentasi.",
  },
  {
    title: "Mushollah",
    image: "assets/prasarana/mushola.jpg",
    description:
      "Mushollah menyediakan tempat ibadah bagi siswa dan staf, dilengkapi dengan sajadah, Al-Qur'an, dan fasilitas pendukung lainnya untuk kenyamanan beribadah.",
  },
  {
    title: "Toilet Siswa",
    image: "assets/prasarana/toilet.jpg",
    description:
      "Toilet siswa dirancang untuk kenyamanan dan kebersihan, dilengkapi dengan fasilitas sanitasi modern, wastafel, dan sistem ventilasi yang baik.",
  },
];

let currentIndex = 0;

// Elemen DOM yang akan diupdate
const imgEl = document.getElementById("prasaranaImage");
const titleEl = document.getElementById("prasaranaTitle");
const descEl = document.getElementById("prasaranaDescription");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

// Fungsi render slide
function renderPrasarana(index) {
  const item = prasaranaData[index];

  // Simple fade effect
  imgEl.classList.add("fade-out");
  titleEl.classList.add("fade-out");
  descEl.classList.add("fade-out");

  setTimeout(() => {
    imgEl.src = item.image;
    imgEl.alt = item.title;
    titleEl.textContent = item.title;
    descEl.textContent = item.description;

    imgEl.classList.remove("fade-out");
    titleEl.classList.remove("fade-out");
    descEl.classList.remove("fade-out");
  }, 150);
}

// Event listener next / prev
btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % prasaranaData.length;
  renderPrasarana(currentIndex);
});

btnPrev.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + prasaranaData.length) % prasaranaData.length;
  renderPrasarana(currentIndex);
});

// Optional: swipe keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    btnNext.click();
  } else if (e.key === "ArrowLeft") {
    btnPrev.click();
  }
});

// Simple fade animation (gunakan CSS inline di sini)
const style = document.createElement("style");
style.innerHTML = `
  .fade-out {
    opacity: 0;
    transition: opacity 0.15s ease;
  }
  #prasaranaImage,
  #prasaranaTitle,
  #prasaranaDescription {
    transition: opacity 0.15s ease;
  }
`;
document.head.appendChild(style);

// Initial render
renderPrasarana(currentIndex);
