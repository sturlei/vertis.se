import { connect } from "react-redux";
import styled from "styled-components";
// store
import { actions } from "../store/settings";

const Settings = ( {settings, changeTheme} ) => {
    const themeProps = settings.config.themes
    const activeTheme = themeProps.currentTheme
    const allThemes =themeProps.allThemes
    console.log(allThemes);
    return (
        <SettingsToggle>
            <h1>Settings</h1>
            <p>Active theme: {activeTheme}</p>
            <ul>
                {allThemes.map( (theme , ind)=> (
                    <li key={ind} onClick={() => changeTheme(allThemes[ind])}>
                        {theme}
                    </li>
                ))}
            </ul>
       </SettingsToggle>
    )
}

const SettingsToggle = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    padding: 2rem;
    background-color: red;
`

// state.entities.settings.config
const mapStateToProps = ( state ) => ( {
    settings: state.entities.settings
} );
const mapDispatchToProps = ( dispatch ) => ( {
    changeTheme: (theme)=> dispatch(actions.changeTheme(theme)),
})
export default connect( mapStateToProps, mapDispatchToProps )( Settings );
