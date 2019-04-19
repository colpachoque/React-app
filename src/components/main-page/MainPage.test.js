import React from "react";
import MainPage from "./MainPage";
import { shallow, mount } from "enzyme";

describe("Main Page component", () => {
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
      <MainPage name={movie.name} genre={movie.genre} year={movie.year} />
    );
    expect(component).toMatchSnapshot();
  });
});
