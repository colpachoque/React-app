import React from "react";
import Results from "./Results";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
describe("Results component", () => {
  it("should be render correctly", () => {
    const component = shallow(<Results />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
