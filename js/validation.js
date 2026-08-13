const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates settings form fields. Single source of truth for all validation rules.
 * @param {{ name: string, email: string }} fields
 * @returns {{ isValid: boolean, errors: { name?: string, email?: string }, values: { name: string, email: string } }}
 */
export function validateSettings({ name, email }) {
  const errors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();

  if (!trimmedName) {
    errors.name = "Name is required.";
  }
  else if (trimmedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
}
  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Enter a valid email address.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    values: {
      name: trimmedName,
      email: trimmedEmail,
    },
  };
}
