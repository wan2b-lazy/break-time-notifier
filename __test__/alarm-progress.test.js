import { render, screen } from "@testing-library/react";
import AlarmProgress from "@/pages/alarm-progress";
import "@testing-library/jest-dom";

describe("AlarmProgress", () => {
  test("render AlarmProgress", () => {
    render(<AlarmProgress />);

    screen.debug();
  });
});
