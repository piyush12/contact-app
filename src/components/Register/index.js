import React, {useContext, useEffect} from 'react';
import RegisterForm from './Form';
import {Alert} from 'antd';
import AuthContext from '../../context/Auth/authContext';

const Register = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.getUserData();
	}, []);

	const [userName, setUserName] = React.useState('');

	const submitUser = value => {
		const {userData} = authContext;
		const getAllUserName = userData.registeredUser.map(
			username => username.username
		);

		if (getAllUserName.includes(value.username)) {
			const exists = `${value.username} already exists`;
			setUserName(exists);
		} else {
			delete value.confirm;
			const addUser = [...userData.registeredUser, value];
			userData.registeredUser = addUser;
			authContext.addUser(userData);
		}
	};

	return (
		<div className="login-holder">
			<div className="register-form">
				<h1>Register</h1>
				{userName && <Alert message={userName} type="error" />}
				{authContext.message !== null && (
					<Alert message={authContext.message} type="success" />
				)}
				<RegisterForm
					submitUser={submitUser}
					loading={authContext.loading}
					formSubmitted={authContext.message}
				/>
			</div>
		</div>
	);
};

export default Register;
