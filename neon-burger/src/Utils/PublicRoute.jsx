import { Redirect, Route } from "react-router-dom";
import { getToken } from "./Common";

const PublicRoute = ({ componente: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props =>{
            !getToken() ? <Component {...props} />
            : <Redirect to={{ pathname: '/login' }} />
        }}
        />
    )
}

export default PublicRoute;