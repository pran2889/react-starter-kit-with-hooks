import React from "react";
import { Route, Switch } from "react-router-dom";
const Login = React.lazy(() => import('../Components/Authentication/login'));
const Register = React.lazy(() => import('../Components/Authentication/register'));
const NotFound = React.lazy(() => import('../Components/Error/notfound'));
const Dashboard = React.lazy(() => import('../Components/layouts/dashboard'));
const ProtectedRoute = React.lazy(() => import('./protected.route'));

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
export default AppRouter;