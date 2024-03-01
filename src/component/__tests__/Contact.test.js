import { render, screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";

describe("contact us test cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load Buton inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);
    //quering
    const inputboxes = screen.getAllByRole("textbox");

    console.log(inputboxes.length);
    //   assertion
    expect(inputboxes).toBe(2);
  });
});
