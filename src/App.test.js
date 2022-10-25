import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  //find anelement with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: /Change to blue/i });
  //except the background color red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button
  fireEvent.click(colorButton);

  //except the background colot to blue

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //except the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("intial condiitons", () => {
  render(<App />);

  //check that th ebutton startes out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  //check that checkbox start out unchecked

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disabled button on firts click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  //click on the checkbox
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Disabled button has grey color and revert to red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  //click on the checkbox  and except bgcolor gray
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  //click the checkbox and except bg coor red
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });
});


//unit testing for function  and describe use for combined test
describe("spaces before camel-case capital letter.", () => {
  test("Workd for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
