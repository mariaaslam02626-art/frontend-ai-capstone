import { validateSettings } from "./validation.js";

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

function setFieldError(input, errorElement, message) {
  const hasError = Boolean(message);
  errorElement.textContent = message;
  input.classList.toggle("invalid", hasError);
  input.setAttribute("aria-invalid", hasError ? "true" : "false");
}

function clearFormMessage() {
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

function showSuccessMessage() {
  formMessage.textContent = "Settings saved successfully";
  formMessage.className = "form-message success";
}

function applyValidationResult(result) {
  setFieldError(nameInput, nameError, result.errors.name || "");
  setFieldError(emailInput, emailError, result.errors.email || "");
  return result.isValid;
}

function handleSubmit(event) {
  event.preventDefault();
  clearFormMessage();

  const result = validateSettings({
    name: nameInput.value,
    email: emailInput.value,
  });

  if (!applyValidationResult(result)) {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(result.values));
  showSuccessMessage();
}

function clearFieldError(input, errorElement) {
  setFieldError(input, errorElement, "");
  clearFormMessage();
}

nameInput.addEventListener("input", () => clearFieldError(nameInput, nameError));
emailInput.addEventListener("input", () => clearFieldError(emailInput, emailError));
form.addEventListener("submit", handleSubmit);

loadSettings();
