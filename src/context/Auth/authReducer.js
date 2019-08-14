import {
	SET_LOADING,
	ADD_USER,
	GET_USER,
	INVALID_USER,
	INVALID_PASSWORD,
	LOGIN_SUCCESS,
	ISLOGIN
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_USER:
			return {
				...state,
				loading: false,
				userData: action.payload
			};

		case ADD_USER:
			return {
				...state,
				loading: false,
				message: 'user added successfully'
			};
		case INVALID_USER:
			return {
				...state,
				loading: false,
				loginMessage: 'Invalid username'
			};
		case INVALID_PASSWORD:
			return {
				...state,
				loading: false,
				loginMessage: 'Invalid password'
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				loginMessage:'',
				isAuthenticated: true,
				logedinDetails:action.payload,
				isLogin:true
			};
		case ISLOGIN:
			return{
				...state,
				isLogin:action.payload
			}
		default:
			return state;
	}
};
