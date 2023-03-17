import { useToast } from "@chakra-ui/react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./index";

jest.mock("@chakra-ui/react", () => {
  const toast = jest.fn();
  return {
    ...jest.requireActual("@chakra-ui/react"),
    useToast: () => toast
  };
});

describe("Home", () => {
  describe("when button is clicked", () => {
    it("should call chakra toast", async () => {
      const toast = useToast();
      render(<Home />)
      fireEvent.click(screen.getByText(/show toast!/i))
      expect(toast).toHaveBeenCalledTimes(1)
    });
  });
});
