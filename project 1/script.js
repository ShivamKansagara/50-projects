const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeclasses();
    panel.classList.add("active");
  });
});
function removeclasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
