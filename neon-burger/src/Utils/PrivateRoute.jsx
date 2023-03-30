import { Redirect, Route } from "react-router-dom";
import { getToken } from "./Common";

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props => {
            getToken() ? <Component {...props} />
            : <Redirect to={{ pathname: '/admin', state: { from: props.location} }} />
        }}
        />
    )
}

export default PrivateRoute;