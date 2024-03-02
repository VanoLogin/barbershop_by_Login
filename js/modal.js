const refs = {
  openModalBtn: document.getElementById("openModalBtn"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  modalWindow: document.getElementById("modalWindow"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modalWindow.classList.toggle("is-hidden");
}
