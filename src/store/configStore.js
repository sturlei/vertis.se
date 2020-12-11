import {
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";

export default () => configureStore( {
    middleware: [
        ...getDefaultMiddleware(),
    ],


} )