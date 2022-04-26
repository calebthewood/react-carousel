import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

//Card({caption, src, currNum, totalNum})

/**
 * Tests that Card renders.
 */
it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card
    caption="testCaption"
    src="testSrc"
    currNum="testNum"
    totalNum="totalNum" />);
});

/**
 * Snapshot Test:
 *
 */

it("matches snapshot", function () {
  const { container } = render(<Card
                                  caption="testCaption"
                                  src="testSrc"
                                  currNum="testNum"
                                  totalNum="totalNum"
                              />);
  expect(container).toMatchSnapshot();
});