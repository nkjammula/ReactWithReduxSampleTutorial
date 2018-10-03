import expect from 'expect';
import {createStore} from 'redux';
import rootreducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function(){
it('should handle creating courses', function(){
const store = new createStore(rootreducer,initialState);
const course ={
    title:'Clean Code'
};
const action = courseActions.createCourseSuccess(course);
store.dispatch(action);

const actual = store.getState().courses[0];

const expected = {
    title:'Clean Code'
};
expect(actual).toEqual(expected);
});
});