import { combineReducers } from 'redux';
import { reducer as form } from "redux-form";
import main from './weatherReducer';

export default combineReducers({
    main,
    form
});