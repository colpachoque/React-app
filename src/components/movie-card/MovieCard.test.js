import React from "react";
import { MovieCard } from "./MovieCard";
import { shallow, mount } from "enzyme";

describe("Movie Card component", () => {
  let movie;

  beforeAll(() => {
    movie = {
      name: "The best movie ever",
      genre: "Drama",
      year: 1994
    };
  });

  it("should be render correctly", () => {
    const component = shallow(<MovieCard movie={movie} />);
    expect(component).toMatchSnapshot();
  });
});
