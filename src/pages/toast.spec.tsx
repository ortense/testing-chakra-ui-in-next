import { useToast } from "@chakra-ui/react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./index";

jest.mock("@chakra-ui/react", () => {
  const toast = jest.fn();
  Object.defineProperty(toast, 'closeAll', {
    value: jest.fn(),
  });

  return {
    ...jest.requireActual("@chakra-ui/react"),
    useToast: () => toast
  };
});

describe("Home", () => {
  describe("show toast", () => {
    it("should call toast.closeAll", () => {
      const toast = useToast();
      render(<Home />);
      fireEvent.click(screen.getByText(/show toast!/i))
      expect(toast).toHaveBeenCalledTimes(1);
    });
  });

  describe("close", () => {
    it("should call chakra toast", () => {
      const toast = useToast();
      render(<Home />);
      fireEvent.click(screen.getByText(/close all!/i));
      expect(toast.closeAll).toHaveBeenCalledTimes(1);
    });
  });
});
