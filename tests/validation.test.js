import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateSettings } from "../js/validation.js";

describe("validateSettings", () => {
  it("rejects empty name and email fields", () => {
    const result = validateSettings({ name: "", email: "" });

    assert.equal(result.isValid, false);
    assert.equal(result.errors.name, "Name is required.");
    assert.equal(result.errors.email, "Email is required.");
  });

  it("rejects whitespace-only name and email", () => {
    const result = validateSettings({ name: "   ", email: "\t  \n" });

    assert.equal(result.isValid, false);
    assert.equal(result.errors.name, "Name is required.");
    assert.equal(result.errors.email, "Email is required.");
  });

  it("rejects invalid email addresses", () => {
    const result = validateSettings({ name: "Maria", email: "not-an-email" });

    assert.equal(result.isValid, false);
    assert.equal(result.errors.email, "Enter a valid email address.");
    assert.equal(result.errors.name, undefined);
  });

  it("accepts valid name and email and trims values", () => {
    const result = validateSettings({
      name: "  Maria  ",
      email: "  maria@example.com  ",
    });

    assert.equal(result.isValid, true);
    assert.deepEqual(result.errors, {});
    assert.deepEqual(result.values, {
      name: "Maria",
      email: "maria@example.com",
    });
  });
});
