import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
	SET_LOADING,
	ADD_USER,
	GET_USER,
	INVALID_USER,
	INVALID_PASSWORD,
  LOGIN_SUCCESS,
  ISLOGIN
} from '../types';
import {API} from '../../constant';

const AuthState = props => {
	const initialState = {
		loading: false,
		userData: null,
		message: null,
		loginMessage: '',
		isAuthenticated: false,
		logedinDetails: '',
		isLogin: true
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	const getUserData = async () => {
		dispatch({
			type: SET_LOADING
		});

		const res = await fetch(API);
		const data = await res.json();

		dispatch({
			type: GET_USER,
			payload: data
		});
	};

	const addUser = async data => {
		dispatch({
			type: SET_LOADING
		});
		const options = {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const response = await fetch(API, options);
		const userData = await response.json();

		dispatch({
			type: ADD_USER,
			payload: userData
		});
	};

	const login = async user => {
		dispatch({
			type: SET_LOADING
		});

		const res = await fetch(API);
		const data = await res.json();

		const getUser = data.registeredUser.filter(
			username => username.username === user.username
		);
		if (getUser.length === 0) {
			dispatch({
				type: INVALID_USER
			});
		} else if (getUser[0].password !== user.password) {
			dispatch({
				type: INVALID_PASSWORD
			});
		} else {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: getUser[0]
			});
			localStorage.setItem('userDetails', JSON.stringify(getUser[0]));
		}
	};

	// check is login

	const isLoggedIn = () => {
		const getLogedInDetails = localStorage.getItem('userDetails');

		if (getLogedInDetails !== null) {
			dispatch({
        type: ISLOGIN,
        payload:true
			});
		} else {
			dispatch({
        type: ISLOGIN,
        payload:false
			});
		}
	};

	return (
		<AuthContext.Provider
			value={{
				getUserData,
				loading: state.loading,
				userData: state.userData,
				addUser,
				message: state.message,
				login,
        isAuthenticated: state.isAuthenticated,
        isLoggedIn,
				isLogin:state.isLogin,
				loginMessage:state.loginMessage
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
