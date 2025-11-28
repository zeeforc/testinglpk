// Scroll "Berita Lainnya" dengan tombol oranye
const newsScrollContainer = document.getElementById("newsListScroll");
const newsScrollDownBtn = document.getElementById("newsScrollDown");

if (newsScrollContainer && newsScrollDownBtn) {
  newsScrollDownBtn.addEventListener("click", () => {
    // scroll lembut ke bawah di dalam panel
    newsScrollContainer.scrollBy({
      top: 260, // bisa disesuaikan
      behavior: "smooth",
    });
  });
}
