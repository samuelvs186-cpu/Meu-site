// Busca de projetos
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const text = card.dataset.name.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

// Scroll suave para âncoras (só executa se o elemento existir)
const hash = window.location.hash;
if (hash) {
  const target = document.querySelector(hash);
  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}