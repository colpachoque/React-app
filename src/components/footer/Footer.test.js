import React from "react";
import Footer from "./Footer";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("Footer component", () => {
  it("should be render correctly", () => {
    const component = shallow(<Footer />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
