const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  removeBorder();
  removeShow();
  //borda na guia atual
  this.classList.add("tab-border");
  // pega o conteúdo do item pelo DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
//evento de click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
