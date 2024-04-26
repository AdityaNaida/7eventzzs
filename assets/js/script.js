document.querySelectorAll(".questions").forEach((e) => {
  e.addEventListener("click", () => {
    const nextDiv = e.nextElementSibling;
    nextDiv.classList.toggle("visible");
  });
});
