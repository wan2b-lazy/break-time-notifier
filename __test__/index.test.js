import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

//next/routerをmockにすることで、テスト時にエラーが起こらないようにする
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("Home", () => {
  test("render a heading", () => {
    render(<Home />);

    //screen.debug();
  });
});
