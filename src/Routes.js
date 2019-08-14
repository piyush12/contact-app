import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddContact from './components/Dashboard/AddContact';
import AuthContext from './context/Auth/authContext';

const Routes = () => {
	const authContext = React.useContext(AuthContext);

	React.useEffect(() => {
		authContext.isLoggedIn();
	}, []);

	console.log(authContext.isLogin)

	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route {...rest} render={(props) => (
			authContext.isLogin === true
				? <Component {...props} />
				: <Redirect to={{
						pathname: '/login'
					}} />
		)} />
	)

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/login" component={Login} />
			<PrivateRoute path="/dashboard" component={Dashboard} />
			<Route path="/register" component={Register} />
			<PrivateRoute path="/add-contact" component={AddContact} />
			<PrivateRoute path="/edit-contact" component={AddContact} />
		</Switch>
	);
};

export default Routes;
