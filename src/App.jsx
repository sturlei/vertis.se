import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// styles
import BaseStyle from "./style/BaseStyle";
import GlobalVariables from "./style/GlobalVariables";
import Themes from "./style/theme/Themes";


function App( props ) {
  const { children } = props;
  const CurrnetTheme = Themes[props.settings.config.themes.currentTheme];

  return (
    <div className="App" >
      <BaseStyle />
      <GlobalVariables />
      <CurrnetTheme/>
        {children}
      </div>
  );
}

// state.entities.settings.config
const mapStateToProps = ( state ) => ( {
    settings: state.entities.settings
} );
const mapDispatchToProps = ( dispatch ) => ( {
} )

export default connect(mapStateToProps,mapDispatchToProps )(withRouter( App ));