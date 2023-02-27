import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  test("render a heading", () => {
    render(<Home />);

    //screen.debug();
  });
});
