import styled from "styled-components";
import { connect } from "react-redux";

// actions
import { actions as settingsActions } from "../store/settings";

const SettingsMiniPage = ({settings, allThemes, currentTheme, changeTheme}) => {

console.log(settings,allThemes);
    return (
        <Wrapper>
            <SettingsItem>
                <DeviderText title="Theme Settings" />
                <RowSettings>
                    <RowSettingsTitle>
                        Active theme
                    </RowSettingsTitle>
                    <RowSettingsContainer>
                        <SelectValue value={currentTheme}  onChange={(e) => changeTheme(e.target.value)}>
                            {allThemes.map( ( themeItem, ind ) => (
                                <SelectValueOption key={ind} value={themeItem}>{themeItem}</SelectValueOption>
                            ))}
                        </SelectValue>
                    </RowSettingsContainer>
                        <ColorPallets color="--color-primary-dark"/>
                        <ColorPallets color="--color-primary-default"/>
                        <ColorPallets color="--color-primary-light"/>
                        <ColorPallets color="--color-secondary-dark"/>
                        <ColorPallets color="--color-secondary-default"/>
                        <ColorPallets color="--color-secondary-light"/>
                </RowSettings>
            </SettingsItem>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

const DeviderText = ( {title} ) => { 
    return (
        <DevContainer>
            <DevLines />
            <DevText>{title}</DevText>
            <DevLines />           
        </DevContainer>
    )
}
const SettingsItem = styled.div`
    background-color: var(--color-white-2);
    border-radius: 1rem;
    padding: .5rem 1rem;
`;
const DevContainer = styled.div`
    color: var(--color-gray-2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;

`;
const DevLines = styled.div`
    height: .1rem;
    background-color: var(--color-white-3);
    flex: 1 1 ;

`
const DevText = styled.span`
    user-select: none;
    padding: 0 1.5rem;
    text-transform: capitalize;
`;
const RowSettings = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 auto;

`;
const RowSettingsTitle = styled.p`
    color: var(--color-gray-2);
    flex: 1 1 auto;
    text-transform: capitalize;
    &:after {
        margin-left: .2rem;
        content: ':';
    }

`
const RowSettingsContainer = styled.div`
    flex: 1 1 auto;
`

const SelectValue = styled.select`
    position: relative;
    border: none;
    padding: .7rem;
    border-radius: .2rem;
    appearance: none;
    background-color: transparent;
    color: var(--color-black-3);
    border-bottom: .2rem solid var(--color-primary-light);
    &:focus {
        outline: none;
    }
    
`
const SelectValueOption = styled.option``

const ColorPallets = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    background-color: ${( { color } ) => `var(${color})` };
    transition: all .2s ease;
`;


const mapStateToProps = ( state ) => ( {
    settings: state.entities.settings,
    allThemes: state.entities.settings.config.themes.allThemes,
    currentTheme: state.entities.settings.config.themes.currentTheme,
} );
const mapDispatchToProps = ( dispatch ) => ( {
    changeTheme: (theme)=> dispatch(settingsActions.changeTheme(theme))
} )

export default connect(mapStateToProps,mapDispatchToProps )(SettingsMiniPage);