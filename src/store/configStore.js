import {
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
// reducer
import reducer from "./reducer";

const storeConfig = () => configureStore( {
    middleware: [
        ...getDefaultMiddleware(),
    ],
    reducer

} )

export default storeConfig;