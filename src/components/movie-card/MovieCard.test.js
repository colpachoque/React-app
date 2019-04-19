import React from "react";
import MovieCard from "./MovieCard";
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
    const component = shallow(
      <MovieCard name={movie.name} genre={movie.genre} year={movie.year} />
    );
    expect(component).toMatchSnapshot();
  });

  it("should render correct year", () => {
    const component = mount(
      <MovieCard name={movie.name} genre={movie.genre} year={movie.year} />
    );
    expect(component.prop("year")).toEqual(1994);
  });

  it("should render correct name", () => {
    const component = mount(
      <MovieCard name={movie.name} genre={movie.genre} year={movie.year} />
    );
    expect(component.props().name).toBeDefined();
  });

  it("should render correct genre", () => {
    const component = mount(
      <MovieCard name={movie.name} genre="Drama" year={movie.year} />
    );
    expect(component.prop("genre")).toEqual(movie.genre);
  });
});
