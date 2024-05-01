document.querySelectorAll(".questions").forEach((e) => {
  e.addEventListener("click", () => {
    const nextDiv = e.nextElementSibling;
    nextDiv.classList.toggle("visible");
  });
});

const slider = document.getElementById("slider");
const sliderItems = document.getElementById("slides");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function slide(wrapper, items, prevBtn, nextBtn) {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.querySelectorAll(".slide"),
    slidesLength = slides.length,
    slideSize = slides[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add("loaded");

  items.onmousedown = dragStart;

  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  prevBtn.addEventListener("click", () => shiftSlide(-1));
  nextBtn.addEventListener("click", () => shiftSlide(1));

  items.addEventListener("transitionend", checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    posX1 = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    document.onmouseup = dragEnd;
    document.onmousemove = dragAction;
  }

  function dragAction(e) {
    e = e || window.event;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    posX2 = posX1 - clientX;
    posX1 = clientX;
    items.style.left = `${items.offsetLeft - posX2}px`;
  }

  function dragEnd() {
    posFinal = items.offsetLeft;
    const diff = posFinal - posInitial;
    if (diff < -threshold) {
      shiftSlide(1, "drag");
    } else if (diff > threshold) {
      shiftSlide(-1, "drag");
    } else {
      items.style.left = `${posInitial}px`;
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add("shifting");
    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }
      items.style.left =
        dir === 1
          ? `${posInitial - slideSize}px`
          : `${posInitial + slideSize}px`;
      index += dir;
    }
    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove("shifting");
    if (index === -1) {
      items.style.left = `${-slidesLength * slideSize}px`;
      index = slidesLength - 1;
    }
    if (index === slidesLength) {
      items.style.left = `${-slideSize}px`;
      index = 0;
    }
    allowShift = true;
  }
}

const slides = document.querySelectorAll(".slide");
const pagination = document.querySelector("#pagination");
slides.forEach((el, index) => {
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    goToSlide(index);
  });
  pagination.appendChild(button);
});

function goToSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }
  const slideWidth = slider.offsetWidth;
  const offset = -index * slideWidth;
  slider.querySelector(".slides").style.left = offset + "px";
}

slide(slider, sliderItems, prev, next);

//booking dates

const dateSelect = document.querySelector("#booking-dates");

const today = new Date();

for (let i = 0; i < 60; i++) {
  const date = new Date(today);
  date.setDate(date.getDate() + i);

  const formattedDate = formatDate(date);

  const option = document.createElement("option");
  option.value = formattedDate;
  option.textContent = formattedDate;

  dateSelect.appendChild(option);
}

function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = padZero(date.getDate());

  return `${day} ${month} ${year}`;
}

function padZero(num) {
  return num < 10 ? "0" + num : num;
}

function activeInclusion(e) {
  if (e === `inclusion`) {
    document.querySelector(".inclusion").classList.add("active");
    document.querySelector(".exclusion").classList.remove("active");
    document.querySelector(".inclusion-content").style.display = "block";
    document.querySelector(".exclusion-content").style.display = "none";
  } else {
    document.querySelector(".inclusion").classList.remove("active");
    document.querySelector(".exclusion").classList.add("active");
    document.querySelector(".inclusion-content").style.display = "none";
    document.querySelector(".exclusion-content").style.display = "block";
  }
}

document.querySelector(".reviews").addEventListener("click", function () {
  document
    .querySelector(".rating-header")
    .scrollIntoView({ behaviour: "smooth" });
});

document.querySelector("#go-inclusion").addEventListener("click", function () {
  document
    .querySelector(".inclusion-exclusion-holder")
    .scrollIntoView({ behavior: "smooth" });
});
function moveNext() {
  const slider = document.querySelector(".similar-products-slider");
  slider.scrollLeft += slider.offsetWidth;
}
function movePrev() {
  const slider = document.querySelector(".similar-products-slider");
  slider.scrollLeft -= slider.offsetWidth;
}

function viewSimilar() {
  document.querySelector(".modal-holder").classList.toggle("block");
}

function viewAddon() {
  document.querySelector(".addon-modal").classList.toggle("block");
}
