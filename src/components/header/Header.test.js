import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
describe("Header component", () => {
  let movie;

  beforeAll(() => {
    movie = {
      name: "The best movie ever",
      genre: "Drama",
      year: 1994
    };
  });

  it("should be render correctly", () => {
    const component = shallow(<Header />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
