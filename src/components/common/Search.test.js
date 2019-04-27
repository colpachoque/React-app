import React from "react";
import Search from "./Search";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "@material-ui/core/Button";
describe("Search component", () => {
  let movie;

  beforeAll(() => {
    movie = {
      name: "The best movie ever",
      genre: "Drama",
      year: 1994
    };
  });

  it("should be render correctly", () => {
    const component = shallow(
      <Search label={"Tracker"} value={""} searchBy={"title"} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("user text is echoed", () => {
    const component = shallow(
      <Search label={"Tracker"} value={""} searchBy={"title"} />
    );

    // expect(component.prop('label')).toEqual('Tracker');
    console.log(component.find(".abc"));
    // component.find('input').simulate('change', {
    //     target: {value: 'hello'}
    // });

    // expect(component.find('input').props().value).toEqual('hello')
  });
});
