const STORAGE_KEY = "userSettings";

const form = document.getElementById("settings-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const formMessage = document.getElementById("form-message");

function loadSettings() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return;
  }

  try {
    const settings = JSON.parse(saved);
    nameInput.value = settings.name || "";
    emailInput.value = settings.email || "";
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function validateName(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Name is required.";
  }

  if (trimmed.length < 2) {
    return "Name must be at least 2 characters.";
  }

  return "";
}

function validateEmail(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Email is required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(trimmed)) {
    return "Enter a valid email address.";
  }

  return "";
}

function setFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.toggle("invalid", Boolean(message));
}

function clearFormMessage() {
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function handleSubmit(event) {
  event.preventDefault();
  clearFormMessage();

  const nameMessage = validateName(nameInput.value);
  const emailMessage = validateEmail(emailInput.value);

  setFieldError(nameInput, nameError, nameMessage);
  setFieldError(emailInput, emailError, emailMessage);

  if (nameMessage || emailMessage) {
    showFormMessage("Please fix the errors above.", "error");
    return;
  }

  const settings = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  showFormMessage("Settings saved successfully.", "success");
}

nameInput.addEventListener("input", () => {
  setFieldError(nameInput, nameError, "");
  clearFormMessage();
});

emailInput.addEventListener("input", () => {
  setFieldError(emailInput, emailError, "");
  clearFormMessage();
});

form.addEventListener("submit", handleSubmit);

loadSettings();
