import { combineReducers } from "redux";

import DNA from "./DNA";


const rootReducer = combineReducers({
    DNA
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>