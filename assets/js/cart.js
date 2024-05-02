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

function viewSignin() {
  document.querySelector(".sign-in-modal").classList.toggle("block");
}

try {
  document
    .querySelector("#first-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const number = document.getElementById("number").value.trim();
      if (number.length < 10 && number.length > 0) {
        for (error of document.querySelectorAll(".wrong-number")) {
          error.classList.remove("hidden");
        }
        document.querySelector("#number").classList.add("wrong-input");
      }

      if (name.length < 3) {
        for (wrongname of document.querySelectorAll(".wrong-name")) {
          wrongname.classList.remove("signup-fadeout");
        }
        document.querySelector("#name").classList.add("wrong-input");
      }

      if (number.length === 10 && name.length > 3) {
        this.classList.add("signup-fadeout");
        document.querySelector("#second-form").classList.remove("hidden");
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
      document.querySelector("#number").classList.add("correct-input");
    } else {
      for (error of document.querySelectorAll(".wrong-number")) {
        error.classList.add("hidden");
      }
      document.querySelector(".correct-number").classList.add("hidden");
      document.querySelector("#number").classList.remove("wrong-input");
      document.querySelector("#number").classList.remove("correct-input");
    }
  });

  document.getElementById("name").addEventListener("input", function () {
    const name = this.value.trim();
    if (name.length >= 3) {
      document.querySelector(".correct-name").classList.remove("hidden");
      for (wrongname of document.querySelectorAll(".wrong-name")) {
        wrongname.classList.add("hidden");
      }
      document.querySelector("#name").classList.remove("wrong-input");
      document.querySelector("#name").classList.add("correct-input");
    } else {
      document.querySelector(".correct-name").classList.add("hidden");
      for (wrongname of document.querySelectorAll(".wrong-name")) {
        wrongname.classList.add("hidden");
      }
      document.querySelector("#name").classList.remove("wrong-input");
      document.querySelector("#name").classList.remove("correct-input");
    }
  });
} catch (err) {}

//password form

document.querySelector(".password-view").addEventListener("click", function () {
  const password = document.querySelector("#password");
  if (password.type === "password") {
    password.type = "text";
    this.src = "assets/icons/eye.svg";
  } else {
    password.type = "password";
    this.src = "assets/icons/eye-slash.svg";
  }
});

document.querySelector("#second-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const password = document.querySelector("#password").value.trim();
  if (password.length < 6 && password.length > 0) {
    document.querySelector("#password").classList.add("wrong-input");
    for (wp of document.querySelectorAll(".wrong-number")) {
      wp.classList.remove("hidden");
    }
  } else {
    window.location.href = "index.html";
  }
});

document.querySelector("#password").addEventListener("input", function () {
  const password = this.value;

  if (password.length >= 6) {
    document.querySelector(".correct-password").classList.remove("hidden");
    document.querySelector("#password").classList.add("correct-input");
    document.querySelector("#password").classList.remove("wrong-input");
    for (wp of document.querySelectorAll(".wrong-number")) {
      wp.classList.add("hidden");
    }
  } else {
    document.querySelector(".correct-password").classList.add("hidden");
    document.querySelector("#password").classList.remove("correct-input");
    document.querySelector("#password").classList.remove("wrong-input");
    for (wp of document.querySelectorAll(".wrong-number")) {
      wp.classList.add("hidden");
    }
  }
});
