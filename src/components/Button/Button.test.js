import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives 'click me'", () => {
    test("Then it should render a button with this text inside", () => {
      const text = "click me";
      const expectedText = "click me";

      render(<Button text={text} actionOnClick={() => "a"} />);

      const button = screen.getByRole("button");

      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it is clicked", () => {
    test("Then it should execute a given action", () => {
      const mockAction = jest.fn();

      render(<Button text={""} actionOnClick={mockAction} />);

      const button = screen.getByRole("button");

      userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
