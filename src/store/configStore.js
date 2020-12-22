import {
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
// middwares
import api from "./middleware/api";

// reducer
import reducer from "./reducer";

const storeConfig = () => configureStore( {
    middleware: [
        ...getDefaultMiddleware(),
        api
    ],
    reducer
} )

export default storeConfig;