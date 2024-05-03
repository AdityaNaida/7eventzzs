let totalPrice = parseInt(document.querySelector("#total_ammount").textContent);
function halfPrice() {
  totalPrice /= 2;
  document.querySelector("#total_ammount").innerHTML = totalPrice;
}
function fullPrice() {
  totalPrice *= 2;
  document.querySelector("#total_ammount").innerHTML = totalPrice;
}

//username validate
const username = document.querySelector("#username");
username.addEventListener("input", function () {
  const nameVal = this.value.trim();
  if (nameVal.length >= 3) {
    username.classList.add("correct-input");
    document.querySelector("#username + img").classList.remove("hidden");
  } else {
    username.classList.remove("correct-input");
    document.querySelector("#username + img").classList.add("hidden");
  }
});
username.addEventListener("blur", function () {
  const nameVal = this.value.trim();
  const errorName = document.querySelector("#username ~ p");
  console.log(errorName);
  if (nameVal.length < 3 && nameVal.length > 0) {
    username.classList.add("wrong-input");
    errorName.classList.remove("hidden");
  } else {
    username.classList.remove("wrong-input");
    errorName.classList.add("hidden");
  }
});

//email validate
const emailId = document.querySelector("#email_id");
const emailWarn = document.querySelector("#email_id ~ p");
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
emailId.addEventListener("input", function () {
  const emailImg = document.querySelector("#email_id + img");
  if (validateEmail(this.value.trim())) {
    emailId.classList.add("correct-input");
    emailImg.classList.remove("hidden");
    emailWarn.classList.add("hidden");
  } else {
    emailId.classList.remove("correct-input");
    emailImg.classList.add("hidden");
    emailId.classList.remove("wrong-input");
    emailWarn.classList.add("hidden");
  }
});
emailId.addEventListener("blur", function () {
  if (!validateEmail(this.value.trim())) {
    emailId.classList.add("wrong-input");
    emailWarn.classList.remove("hidden");
  } else {
    emailId.classList.remove("wrong-input");
    emailWarn.classList.add("hidden");
  }
});

//address
const address = document.querySelector("#address");
const adressCorrect = document.querySelector("#address + img");
address.addEventListener("input", function () {
  const addressVal = this.value.trim();
  if (addressVal.length >= 3) {
    address.classList.add("correct-input");
    adressCorrect.classList.remove("hidden");
  } else {
    address.classList.remove("correct-input");
    adressCorrect.classList.add("hidden");
  }
});

//landmark
const landMark = document.querySelector("#land_mark");
const landMarkCorrect = document.querySelector("#land_mark + img");
landMark.addEventListener("input", function () {
  const landMarkVal = this.value.trim();
  if (landMarkVal >= 3) {
    landMark.classList.add("correct-input");
    landMarkCorrect.classList.remove("hidden");
  } else {
    landMark.classList.remove("correct-input");
    landMarkCorrect.classList.add("hidden");
  }
});

//pincode
const pincode = document.querySelector("#pincode");
const pincodeCorrect = document.querySelector("#pincode + img");
const pincodeWrong = document.querySelector("#pincode ~ p");
pincode.addEventListener("input", function () {
  let pincodeVal = this.value.trim().replace(/\D/g, "");
  this.value = this.value.replace(/\D/g, "");
  if (/^\d{6}$/.test(pincodeVal)) {
    pincode.classList.add("correct-input");
    pincodeCorrect.classList.remove("hidden");
    pincodeWrong.classList.add("hidden");
  } else {
    pincode.classList.remove("correct-input");
    pincodeCorrect.classList.add("hidden");
    pincodeWrong.classList.add("hidden");
  }
});
pincode.addEventListener("blur", function () {
  let pincodeVal = this.value.trim().replace(/\D/g, "");
  this.value = this.value.replace(/\D/g, "");
  if (!/^\d{6}$/.test(pincodeVal)) {
    pincode.classList.add("wrong-input");
    pincodeWrong.classList.remove("hidden");
  } else {
    pincode.classList.remove("wrong-input");
    pincodeWrong.classList.add("hidden");
  }
});

//cityname
const cityName = document.querySelector("#city");
const cityCorrect = document.querySelector("#city + img");
const cityWrong = document.querySelector("#city ~ img");
cityName.addEventListener("input", function () {
  const cityVal = this.value.trim();
  if (cityVal.length >= 3) {
    cityName.classList.add("correct-input");
    cityCorrect.classList.remove("hidden");
  } else {
    cityName.classList.remove("correct-input");
    cityCorrect.classList.add("hidden");
  }
});

//mobile number validate
const mobileNumber = document.querySelector("#mobile_number");
const mobileNumberCorrect = document.querySelector("#mobile_number + img");
const mobileNumberWrong = document.querySelector("#mobile_number ~ p");

mobileNumber.addEventListener("input", function () {
  const mobileVal = this.value.trim().replace(/\D/g, "");
  this.value = this.value.replace(/\D/g, "");
  if (/^\d{10}$/.test(mobileVal)) {
    mobileNumber.classList.add("correct-input");
    mobileNumberCorrect.classList.remove("hidden");
  } else {
    mobileNumber.classList.remove("correct-input");
    mobileNumberCorrect.classList.add("hidden");
    mobileNumber.classList.remove("wrong-input");
    mobileNumberWrong.classList.add("hidden");
  }
});
mobileNumber.addEventListener("blur", function () {
  const mobileVal = this.value.trim().replace(/\D/g, "");
  this.value = this.value.replace(/\D/g, "");
  if (!/^\d{10}$/.test(mobileVal)) {
    mobileNumber.classList.add("wrong-input");
    mobileNumberWrong.classList.remove("hidden");
  } else {
    mobileNumber.classList.remove("wrong-input");
    mobileNumberWrong.classList.add("hidden");
  }
});

//alternative number

const alternativeNumber = document.querySelector("#alternative_number");
const alternativeNumberCorrect = document.querySelector(
  "#alternative_number + img"
);
const alternativeNumberWrong = document.querySelector(
  "#alternative_number ~ p"
);

alternativeNumber.addEventListener("input", function () {
  const alternativeVal = this.value.trim().replace(/\D/g, "");
  this.value = this.value.replace(/\D/g, "");
  if (/^\d{10}$/.test(alternativeVal)) {
    alternativeNumber.classList.add("correct-input");
    alternativeNumberCorrect.classList.remove("hidden");
  } else {
    alternativeNumber.classList.remove("correct-input");
    alternativeNumberCorrect.classList.add("hidden");
    alternativeNumber.classList.remove("wrong-input");
    alternativeNumberWrong.classList.add("hidden");
  }
});

alternativeNumber.addEventListener("blur", function () {
  const alternativeVal = this.value.trim().replace(/\D/g, "");
  this.value = this.value.replace(/\D/g, "");
  if (!/^\d{10}$/.test(alternativeVal)) {
    alternativeNumber.classList.add("wrong-input");
    alternativeNumberWrong.classList.remove("hidden");
  } else {
    alternativeNumber.classList.remove("wrong-input");
    alternativeNumberWrong.classList.add("hidden");
  }
});
