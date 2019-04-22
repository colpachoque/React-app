import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
describe("App component", () => {
  it("should be render correctly", () => {
    const component = shallow(<App />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
