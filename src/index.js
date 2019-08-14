import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Routes from './Routes';
import 'antd/dist/antd.css';
import './index.scss';
import Navigation from './components/Navigation';
import AuthState from './context/Auth/AuthState';

ReactDOM.render(
	<AuthState>
		<Router>
			<App />
			<Navigation />
			<div className="main-container">
				<Routes />
			</div>
		</Router>
	</AuthState>,
	document.getElementById('root')
);
