document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');

  // Modal image open on click
  document.querySelectorAll('.art-card img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  // Close modal on click X
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Create floating particles
  const particlesContainer = document.getElementById('particles-js');
  const numberOfParticles = 40;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 6 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}vw`;

    particle.style.animationDuration = `${Math.random() * 12 + 8}s`;
    particle.style.animationDelay = `${Math.random() * 20}s`;

    particlesContainer.appendChild(particle);
  }
});
