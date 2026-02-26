document.addEventListener("DOMContentLoaded", function () {
  // SISTEM POP-UP MODAL (CHARACTER STATS)
  const modalOverlay = document.getElementById("profilModal");
  const modalContent = document.querySelector(".modal-content");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const profilTriggers = document.querySelectorAll(".profil-trigger");

  const modalFoto = document.getElementById("modalFoto");
  const modalNama = document.getElementById("modalNama");
  const modalPeran = document.getElementById("modalPeran");
  const modalSekolah = document.getElementById("modalSekolah");
  const modalTelpFasilitator = document.getElementById("modalTelpFasilitator");
  const modalTelpAyah = document.getElementById("modalTelpAyah");
  const modalTelpIbu = document.getElementById("modalTelpIbu");

  profilTriggers.forEach((card) => {
    card.addEventListener("click", function () {
      // Ambil data dari atribut HTML
      modalFoto.src = this.dataset.foto + ".png";
      modalFoto.alt = "Avatar " + this.dataset.nama;
      modalNama.textContent = this.dataset.nama;
      modalPeran.textContent = "CLASS: " + this.dataset.peran;
      modalSekolah.textContent = "GUILD: " + this.dataset.sekolah;

      modalTelpFasilitator.textContent =
        "COMMS 1: " + this.dataset.telpFasilitator;
      modalTelpAyah.textContent = "COMMS 2: " + this.dataset.telpAyah;
      modalTelpIbu.textContent = "COMMS 3: " + this.dataset.telpIbu;

      // Efek muncul cepat
      modalOverlay.style.display = "flex";
      setTimeout(() => {
        modalOverlay.style.opacity = "1";
      }, 10);
    });
  });

  function closeModal() {
    modalOverlay.style.opacity = "0";
    setTimeout(() => {
      modalOverlay.style.display = "none";
    }, 200);
  }

  modalCloseBtn.addEventListener("click", closeModal);

  // Klik area luar modal untuk menutup
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) closeModal();
  });
});
