import { render, screen } from "@testing-library/react";
import AlarmNotification from "@/pages/alarm-notification";
import "@testing-library/jest-dom";

describe("AlarmNotification", () => {
  test("render AlarmNotification", () => {
    render(<AlarmNotification />);

    screen.debug();
  });
});
