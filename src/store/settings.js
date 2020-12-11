import {
    createSlice
} from "@reduxjs/toolkit";
import * as ls from "local-storage";
import Themes from "../style/theme/Themes";

const themeNames = Object.keys( Themes )
let localStore = ls.get( 'settings' );
const checkSettings = () => {
    if ( !localStore ) {
        ls.set( 'settings', {
            showNumb: false,
            themes: {
                currentTheme: themeNames[ 0 ],
                allThemes: themeNames
            }
        } );
        localStore = ls.get( 'settings' );
    }
    const checkThemes = localStore.themes.allThemes.reduce( ( temp, curr ) => {
        return temp && themeNames.includes( curr );
    }, true )

    if ( !checkThemes ) {
        localStore.themes.allThemes = themeNames;
        const themes = localStore.themes.allThemes
        const currentTheme = localStore.themes.currentTheme;
        !themes.find( curr => curr === currentTheme ) && ( localStore.themes.currentTheme = themeNames[ 0 ] );
        ls.set( 'settings', localStore )
    }

}

checkSettings();

const slice = createSlice( {

    name: 'settings',
    initialState: {
        loading: false,
        config: ls.get( 'settings' ),
    },
    reducers: {
        changeNumb: ( state, action ) => {
            state.config.showNumb = action.payload;
        },
        changeTheme: ( state, action ) => {
            // clone localstorage
            const localSettings = ls.get( 'settings' );
            localSettings.themes.currentTheme = action.payload;
            ls.set( 'settings', localSettings )
            state.config = localSettings
        }
    }
} );



export const actions = slice.actions;
export default slice.reducer;