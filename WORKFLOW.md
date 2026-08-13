# AI-Assisted Development Workflow

## Overview

This project was developed in two rounds to compare the results of vague versus precise instructions given to an AI coding assistant. The goal was not only to generate code, but also to evaluate, test, review, and improve the AI-generated implementation.

## Round 1 — Vague Instructions

The first implementation was created on the `round-1-vague` branch using a less specific requirement. The AI produced a working settings form with name and email fields, validation, error messages, and local storage behavior. The implementation kept validation logic inside the main settings script.

## Round 2 — Precise Instructions

The second implementation was created on the `round-2-precise` branch using more detailed requirements. The AI separated validation into `js/validation.js` and added automated tests in `tests/validation.test.js`. It also introduced accessibility-related attributes such as `aria-invalid` and `aria-describedby`, along with responsive CSS changes.

Git was used to compare the implementations objectively. The comparison between `round-1-vague` and `round-2-precise` showed 6 changed files, with 131 insertions and 61 deletions. The Round 2 branch contained 7 files and 388 inserted lines compared with `main`.

## Testing and Human Review

The initial Round 2 implementation had four automated tests, and all four passed. However, passing tests did not mean the implementation was completely correct. Human review identified two issues that the existing tests did not detect.

First, the email regular expression used an unescaped dot, meaning the pattern could accept an invalid email domain. Second, the minimum two-character name requirement from Round 1 had been removed in Round 2.

Both issues were corrected manually. Two additional tests were then added: one to reject names shorter than two characters and another to reject emails without a dot in the domain. The final test run contained 6 tests, with all 6 passing and 0 failures.

## Lessons Learned

This comparison demonstrated that more precise instructions can lead to better structure and more explicit requirements, but AI-generated code still requires human review. Automated tests are valuable, but they only verify the cases that have actually been tested. A reliable AI-assisted workflow therefore requires clear prompting, version control, testing, code review, correction of AI mistakes, and documentation.