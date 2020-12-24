import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
// styles
import BaseStyle from "./style/BaseStyle";
import GlobalVariables from "./style/GlobalVariables";
import Themes from "./style/theme/Themes";
// sprites
import SpriteOneCollection from "./Sprites/SpriteOneCollection";
// components
import IconBars from "./components/Bars/IconBars";
import SVG from "./components/SVG/SVG";
// minipages
import SettingsMiniPage from "./miniPages/Settings";
// actions
import { actions as settingsActions } from "./store/settings";
import * as apiActions from "./store/apiActions";
import { actions as usersActions } from "./store/users";

function App( props ) {
  const { children, triggerSettings, showSettings, getUsers } = props;
  const CurrnetTheme = Themes[props.settings.config.themes.currentTheme];

  useEffect( () => {
    getUsers()
  }, [getUsers] )

  return (
    <div className="App" >
      <BaseStyle />
      <GlobalVariables />
      <CurrnetTheme />
      <SpriteOneCollection />
      <PositioningAbsolute >

        {showSettings ? (
          <SettingsPanel>
            <ClosePanel onClick={() => triggerSettings( false )}>
              <SVG icon="close" />
            </ClosePanel>
            <SettingsMiniPage />
          </SettingsPanel>
        ) : (
            <IconBars shadow items={[{
              icon: 'settings',
              name: 'Settings',
              onClick: () => triggerSettings()
            }]} />
          )}




      </PositioningAbsolute>
      {children}
    </div>
  );
}
const PositioningAbsolute = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
`;
const SettingsPanel = styled( motion.div )`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--color-white-2);
  width: 30rem;
  height: 50rem;
  padding: 3rem 2rem;
  border-radius: 2rem;
  box-shadow: var(--box-shadow-1);
`;
const ClosePanel = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
    & svg{
    width: 2rem;
    height: 2rem;
    fill: var(--color-primary-light);
    transition: all .2s ease;
    cursor: pointer;
    &:hover {

    fill: var(--color-primary-default);
    }
    }
`;

// state.entities.settings.config
const mapStateToProps = ( state ) => ( {
  settings: state.entities.settings,
  showSettings: state.entities.settings.showSettings,
  users: state.entities.users
} );
const mapDispatchToProps = ( dispatch ) => ( {
  triggerSettings: () => dispatch( settingsActions.triggerSettings() ),
  getUsers: () => dispatch( apiActions.apiCallBegan( {
    url: 'users',
    onStart: usersActions.loadingBegan.type,
    onSuccess: usersActions.saveUsers.type,
    onError: usersActions.loadingDone.type
  } ) )
} )

export default connect( mapStateToProps, mapDispatchToProps )( withRouter( App ) );