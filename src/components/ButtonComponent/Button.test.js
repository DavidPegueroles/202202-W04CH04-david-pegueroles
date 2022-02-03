import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives 'click me'", () => {
    test("Then it should render a button with this text inside", () => {
      const text = "click me";
      const expectedTest = "click me";

      render(<Button text={text} />);

      const button = screen.getByRole("button");

      expect(button).toHaveTextContent(expectedTest);
    });
  });
});
