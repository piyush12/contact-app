import React, {useEffect, useContext} from 'react';
import {Alert} from 'antd';
import LoginForm from './Form';
import AuthContext from '../../context/Auth/authContext';

const Login = (props) => {
	const authContext = useContext(AuthContext);
	const {isAuthenticated} = authContext;

	useEffect(()=> {
		if (isAuthenticated) {
			props.history.push('/dashboard');
    }

	},[isAuthenticated])

	const handleSubmit = value => {
		authContext.login(value);
	};

	return (
		<div className="login-holder">
			<div id="components-form-demo-normal-login">
				<h1>Login</h1>
				{console.log(authContext.loginMessage)}
				{authContext.loginMessage && (
					<Alert message={authContext.loginMessage} type="success" />
				)}
				<LoginForm handleSubmitForm={handleSubmit} loading={authContext.loading} />
			</div>
		</div>
	);
};

export default Login;
