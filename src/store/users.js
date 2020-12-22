import {
    createSlice
} from "@reduxjs/toolkit";

const slice = createSlice( {
    name: 'users',
    initialState: {
        loading: false,
        list: []
    },
    reducers: {

    }
} )

export default slice.reducer