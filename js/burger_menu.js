const refs = {
    openModalBtn: document.getElementById("open"),
    closeModalBtn: document.getElementById("close"),
    modalWindow: document.getElementById("burgerMenu"),
  };
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    refs.modalWindow.classList.toggle("is-hidden");
  }
  