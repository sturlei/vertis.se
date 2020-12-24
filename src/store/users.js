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
        loadingBegan: ( state, action ) => {
            state.loading = true;
        },
        loadingDone: ( state, action ) => {
            state.loading = false;
        },
        saveUsers: ( state, action ) => {
            state.list = [ ...action.payload ]
            state.loading = false;
        }


    }
} )
export const actions = slice.actions
export default slice.reducer