//Redux

import {legacy_createStore, applyMiddlewave} from "redux";
import myReducer from "./MyReducer";

let myStore = legacy_createStore(myReducer);


export default myStore;