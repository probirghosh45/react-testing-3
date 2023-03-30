import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading",{    // getByRole ="heading" for h1-h6 tag
      // name: "Job application form",  
      level: 1 //level 1 for h1 tag
    }); 
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading",{   
      // name: "Section 1",
      level : 2   //level 2 for h2 tag  
    }); 
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox",{    // getByRole ="textbox" for input element
      name: "Name",  // since Name is the level for text area
    }); 
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox",{   // getByRole ="textbox" for input element
      name: "Bio",  // since Bio is the level for text area
    }); 
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox"); // getByRole ="combobox" for dropdown
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox"); // getByRole ="checkbox" for checkbox
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button"); // getByRole ="button" for submit button
    expect(submitElement).toBeInTheDocument();

  });
});
