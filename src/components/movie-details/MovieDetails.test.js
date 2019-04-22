import React from "react";
import MovieDetails from "./MovieDetails";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("Movie Details component", () => {
  let movie;

  beforeAll(() => {
    movie = {
      name: "The best movie ever",
      genre: "Drama",
      year: 1994,
      description: "The best movie ever"
    };
  });

  it("should be render correctly", () => {
    const component = shallow(<MovieDetails movie={movie} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render correct prop movie", () => {
    const component = mount(<MovieDetails movie={movie} />);
    expect(component.prop("movie")).toEqual(movie);
  });
});
