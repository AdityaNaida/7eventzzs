function leftClick() {
  let slider = document.querySelector(".slider");
  slider.scrollLeft -= slider.offsetWidth;
}
function rightClick() {
  let slider = document.querySelector(".slider");
  slider.scrollLeft += slider.offsetWidth;
}
function goToBill() {
  document.querySelector(".payment").scrollIntoView({ behavior: "smooth" });
}
function viewAddon() {
  document.querySelector(".addon-modal").classList.toggle("block");
}
function viewInstructions() {
  document.querySelector(".instruction-modal").classList.toggle("block");
}

//Handle form submission

document.querySelector("#first-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  //   if (!/^\d{10}$/.test(number)) {
  //     alert("Incorrect number detected!");
  //     return;
  //   }

  if (number.length < 10 && number.length > 0) {
    for (error of document.querySelectorAll(".wrong-number")) {
      error.classList.remove("hidden");
    }

    document.querySelector("#number").classList.add("wrong-input");
  }
});

document.getElementById("number").addEventListener("input", function () {
  const number = this.value.trim();
  this.value = this.value.replace(/\D/g, "");
  if (number.length > 10) {
    this.value = number.slice(0, 10);
  }

  if (number.length === 10) {
    for (error of document.querySelectorAll(".wrong-number")) {
      error.classList.add("hidden");
    }
    document.querySelector(".correct-number").classList.remove("hidden");
    document.querySelector("#number").classList.remove("wrong-input");
  } else {
    for (error of document.querySelectorAll(".wrong-number")) {
      error.classList.add("hidden");
    }
    document.querySelector(".correct-number").classList.add("hidden");
    document.querySelector("#number").classList.remove("wrong-input");
  }
});

document.getElementById("name").addEventListener("input", function () {});
