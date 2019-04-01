import React from 'react';
import MainPage from './MainPage';
import MovieCard from './MovieCard';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Main page component', () => {

    it('should be render two movie cards', () => {
        const movies = [{
            name: 'Kill Bill',
            genre: 'Action and adventure',
            year: 2004
        },
            {
                name: 'Kill Bill 2',
                genre: 'Action and adventure',
                year: 2005
            }];
        const component = mount(<MainPage movies={movies}/>);
        expect(component.find(MovieCard).length).toBe(2);
    });
});