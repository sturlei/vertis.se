import { Switch, Route } from "react-router-dom";
// Global component
import App from "./App";
// pages
import Index from "./pages/Index";
import TestPage from "./pages/TestPage";
import Page404 from "./pages/Page404";

const Router = () => {
    return (
        <App>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/test" exact component={TestPage} />
                <Route path="*" component={Page404} />
            </Switch>
        </App>
    )
};



export default Router;