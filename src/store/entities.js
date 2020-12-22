import {
    combineReducers
} from "@reduxjs/toolkit";
// reducers
import settings from "./settings";
import users from "./users";

export default combineReducers( {
    settings,
    users
} )