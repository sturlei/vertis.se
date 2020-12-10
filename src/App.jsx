import { withRouter } from "react-router-dom";

function App( { children } ) {
  return (
    <div className="App" >
      {children}
    </div>
  );
}

export default withRouter( App );