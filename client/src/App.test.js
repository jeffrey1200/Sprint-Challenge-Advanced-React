import React from "react";
import ReactDOM from "react-dom";
import * as rt1 from "@testing-library/react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
afterEach(rt1.cleanup);

test("displays toggle function", () => {
  const { getByTestId } = rt1.render(<App />);
  getByTestId("toggle");
});
