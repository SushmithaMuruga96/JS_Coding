import { render, screen, fireEvent } from "@testing-library/react";
import AsteriskValidations from "./AsteriskValidations";

test("renders the form and all input fields", () => {
  render(<AsteriskValidations />);

  expect(screen.getByText("Asterisk Validations")).toBeInTheDocument();
  expect(screen.getByTestId("name-input")).toBeInTheDocument();
  expect(screen.getByTestId("location-input")).toBeInTheDocument();
  expect(screen.getByTestId("submit-button")).toBeInTheDocument();
});

test("shows error messages when submitting empty form", () => {
  render(<AsteriskValidations />);
  const submitButton = screen.getByTestId("submit-button");

  fireEvent.click(submitButton);

  expect(screen.getByTestId("name-error")).toHaveTextContent(
    "Name is required"
  );
  expect(screen.getByTestId("location-error")).toHaveTextContent(
    "Location is required"
  );
});

test("shows success message when form is filled correctly", () => {
  render(<AsteriskValidations />);
  const nameInput = screen.getByTestId("name-input");
  const locationInput = screen.getByTestId("location-input");
  const submitButton = screen.getByTestId("submit-button");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(locationInput, { target: { value: "New York" } });
  fireEvent.click(submitButton);

  const success = screen.getByTestId("success-message");
  expect(success).toHaveTextContent("Submitted successfully!");
  expect(success).toHaveTextContent("Name: John Doe");
  expect(success).toHaveTextContent("Location: New York");
});

test("does not show success message when one field is empty", () => {
  render(<AsteriskValidations />);
  const nameInput = screen.getByTestId("name-input");
  const submitButton = screen.getByTestId("submit-button");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.click(submitButton);

  expect(screen.queryByTestId("success-message")).toBeNull();
});
