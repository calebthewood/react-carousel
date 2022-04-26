import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<App />);
});