import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox"); // getByRole ="textbox" for input element
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox"); // getByRole ="combobox" for dropdown
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox"); // getByRole ="checkbox" for checkbox
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button"); // getByRole ="button" for submit button
    expect(submitElement).toBeInTheDocument();

  });
});
