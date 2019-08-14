import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button} from 'antd';

const LoginForm = ({form, handleSubmitForm, loading}) => {
	const handleSubmit = e => {
		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				handleSubmitForm(values);
			}
		});
	};

	return (
		<Form onSubmit={handleSubmit} className="login-form">
			<Form.Item>
				{form.getFieldDecorator('username', {
					rules: [{required: true, message: 'Please input your username!'}]
				})(
					<Input
						prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
						placeholder="Username"
						autoComplete="false"
					/>
				)}
			</Form.Item>
			<Form.Item>
				{form.getFieldDecorator('password', {
					rules: [{required: true, message: 'Please input your Password!'}]
				})(
					<Input
						prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
						type="password"
						placeholder="Password"
					/>
				)}
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
					loading={loading}>
					Log in
				</Button>
				Or <Link to="/register">register now!</Link>
			</Form.Item>
		</Form>
	);
};

export default Form.create({name: 'normal_login'})(LoginForm);
