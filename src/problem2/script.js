const elForm = document.querySelector("form");
const OTPSnackbar = document.querySelector("#otp-snackbar");
const generateOTPButton = document.querySelector("#otp-label");
const errorContainer = document.querySelector("#error-msg-container");

let clientOTP;

const validateAddress = (address) => {
  if (!/!^(0x)?[0-9a-f]{40}$/i.test(address)) {
    displayError("Please key in a valid ETH address.");
    return false;
  }
  return true;
};

const validateAmount = (amount) => {
  if (!amount) {
    displayError("Please key in a value of ETH to send.");
    return false;
  } else if (amount < 0) {
    displayError("Please key in a positive value of ETH to send.");
    return false;
  }
  return true;
};

const validateOTP = (OTP) => {
  if (!OTP || !clientOTP) {
    displayError("Please key in the OTP, or request for one.");
    return false;
  } else if (OTP !== clientOTP) {
    displayError("The OTP is incorrect.");
    return false;
  }
  return true;
};

// -- animate and show otp --
const generateAndDisplayOTP = () => {
  clientOTP = (Math.floor(Math.random() * 900000) + 100000).toString();
  OTPSnackbar.style.display = "flex";
  OTPSnackbar.style.animation = "slideInFromAbove 1s ease-out both";
  OTPSnackbar.innerHTML = `Your OTP is: ${clientOTP}`;
  generateOTPButton.disabled = true;
};
generateOTPButton.addEventListener("click", generateAndDisplayOTP);

// -- management of errors --
const displayError = (error) => {
  errorContainer.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>${error}`;
  errorContainer.style.opacity = "1";
};

const validateFormSubmit = (e) => {
  if (
    !(
      validateAddress(elForm.elements["address"].value) &&
      validateAmount(elForm.elements["amount"].value) &&
      validateOTP(elForm.elements["OTP"].value)
    )
  ) {
    e.preventDefault();
  }
};
elForm.addEventListener("submit", validateFormSubmit);
