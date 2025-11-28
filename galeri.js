// Stack interaktif: gambar yang di-hover maju ke depan, yang lain geser ke kiri / kanan
const galleryItems = document.querySelectorAll(".gallery-item");
const stack = document.getElementById("galleryStack");
const overlay = document.getElementById("previewOverlay");
const previewImg = document.getElementById("previewImage");

if (galleryItems.length) {
  const total = galleryItems.length;

  // atur posisi awal
  function applyPositions(frontIndex) {
    galleryItems.forEach((item, idx) => {
      item.classList.remove("pos-front", "pos-left", "pos-right");

      if (idx === frontIndex) {
        item.classList.add("pos-front");
      } else if (idx === (frontIndex + 1) % total) {
        item.classList.add("pos-right");
      } else {
        item.classList.add("pos-left");
      }
    });
  }

  applyPositions(0);

  let hoverTimer = null;

  galleryItems.forEach((item, idx) => {
    item.addEventListener("mouseenter", () => {
      // bersihkan timer sebelumnya
      if (hoverTimer) clearTimeout(hoverTimer);

      // beri delay sebelum ganti posisi
      hoverTimer = setTimeout(() => {
        applyPositions(idx);
      }, 180); // 180ms, boleh dinaikkan misal 250 / 300
    });

    item.addEventListener("click", () => {
      previewImg.src = item.src;
      previewImg.alt = item.alt || "Preview";
      overlay.classList.add("show");
    });
  });

  // Tutup preview ketika overlay diklik
  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  // Tutup dengan Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove("show");
    }
  });
}
