import {
    createSlice
} from "@reduxjs/toolkit";

const slice = createSlice( {
    name: 'settings',
    initialState: {
        loading: false,
        config: {

        }
    },
    reducers: {

    }
} );


export default slice.reducer;