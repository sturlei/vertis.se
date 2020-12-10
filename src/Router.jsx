import { Switch, Route } from "react-router-dom";
// Global component
import App from "./App";
// pages
import Index from "./pages/Index";
import Page404 from "./pages/Page404";

const Router = () => {
    return (
        <App>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="*" component={Page404} />
            </Switch>
        </App>
    )
};



export default Router;