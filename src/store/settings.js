import {
    createSlice
} from "@reduxjs/toolkit";
import Themes from "../style/theme/Themes";

const ThemesNames = Object.keys( Themes )
const slice = createSlice( {
    name: 'settings',
    initialState: {
        loading: false,
        config: {
            showNumb: false,
            themes: {
                currentTheme: ThemesNames[ 0 ],
                allThemes: ThemesNames
            }
        }
    },
    reducers: {
        changeNumb: ( state, action ) => {
            state.config.showNumb = action.payload;
        },
        changeTheme: ( state, action ) => {
            state.config.themes.currentTheme = action.payload || state.config.themes.currentTheme;
        }
    }
} );


export const actions = slice.actions;
export default slice.reducer;