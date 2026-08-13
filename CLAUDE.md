# Project Instructions

## Tech Stack

- Use HTML, CSS, and JavaScript for the frontend.

- Use Node.js for development scripts and automated tests.

- Do not introduce unnecessary frameworks or dependencies.

## Project Structure

- Keep settings form behavior in `js/settings.js`.

- Keep all form validation rules in `js/validation.js` as the single source of truth.

- Keep automated validation tests in `tests/validation.test.js`.

- Keep styling in `css/style.css` and structure/content in `index.html`.

## Validation Rules

- Trim name and email values before validation and saving.

- A name is required and must contain at least 2 characters.

- An email is required and must use a valid email format.

- Validation should return clear errors for individual fields.

- Any new validation rule must have a corresponding automated test.

## Accessibility

- Preserve `aria-invalid` on form inputs and update it when validation state changes.

- Preserve `aria-describedby` connections between inputs and their error messages.

- Keep visible keyboard focus styles.

- Use appropriate semantic HTML and accessible status/error messages.

## Testing

- Run `npm.cmd test` after changing validation logic.

- Do not consider a change complete until all automated tests pass.

- Add tests for new validation rules and important edge cases.

- Review AI-generated tests instead of assuming that passing tests prove the implementation is correct.

## Coding Conventions

- Keep code clean, readable, and organized.

- Use meaningful variable and function names.

- Prefer reusable functions over duplicated logic.

- Avoid unnecessary complexity.

- Follow Conventional Commits for Git commits.

## AI Development

- Use Cursor as the AI-assisted development environment.

- Review all AI-generated code before accepting it.

- Verify AI-generated claims by running the relevant tests or commands.

- Do not blindly accept AI-generated implementations.

- When fixing an AI-generated mistake, add or update a test when appropriate.

## Git Workflow

- Keep `round-1-vague` and `round-2-precise` as separate comparison branches.

- Make focused commits that clearly describe the change.

- Review `git diff` before committing changes.