import React from "react";
import Copyright from "./Copyright";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
describe("Copyright component", () => {
  it("should be render correctly", () => {
    const component = shallow(<Copyright />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
