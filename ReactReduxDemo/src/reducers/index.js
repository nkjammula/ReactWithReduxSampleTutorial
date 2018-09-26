import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rooReducer = combineReducers({
    courses,
    authors, //Es6 short hand property name
    ajaxCallsInProgress
});

export default rooReducer;