import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm"
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

test("placeholders exist on form", () => {
  const { getAllByPlaceholderText } = render(<ContactForm />);

  const firstname = getAllByPlaceholderText(/bill/i);
  const lastname = getAllByPlaceholderText(/luo/i);
  const email = getAllByPlaceholderText(/bluebill1049@hotmail.com/i);
});

test("First Name label text in form", () => {
  const { queryByText } = render(<ContactForm />);

  const hasText = queryByText(/First Name/i)

  expect(hasText).toBeInTheDocument();
});

test("Last Name label text in form", () => {
  const { queryByText } = render(<ContactForm />);

  const hasText = queryByText(/Last Name/i)

  expect(hasText).toBeInTheDocument();
});

test("Email label text in form", () => {
  const { queryByText } = render(<ContactForm />);

  const hasText = queryByText(/Email/i)

  expect(hasText).toBeInTheDocument();
});