 const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const text = card.dataset.name.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  document.querySelector('#sobre').scrollIntoView({
  behavior: 'smooth'
});