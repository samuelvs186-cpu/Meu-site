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

const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modalImage');
const modalGithub = document.getElementById('modal-github');
const modalSite = document.getElementById('modal-site');

if (modal) {
  const modalTriggers = document.querySelectorAll('.card[data-modal-title]');
  modalTriggers.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.dataset.modalTitle;
      const desc = card.dataset.modalDesc;
      const image = card.dataset.modalImage;
      const github = card.dataset.modalGithub;
      const site = card.dataset.modalSite;

      modalTitle.textContent = title;
      modalDescription.textContent = desc;
      modalImage.src = image;
      modalImage.alt = `Imagem de capa do projeto ${title}`;
      modalGithub.href = github;
      modalSite.dataset.link = site;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    });

    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
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