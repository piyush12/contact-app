import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Tooltip} from 'antd';
import shortid from 'shortid';

const RegisterForm = ({form, submitUser, loading, formSubmitted}) => {
	// submit function register
	const handleSubmit = e => {
		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				const userData = {id: shortid.generate(), ...values};
				submitUser(userData);
			}
		});
	};

	//validation

	const compareToFirstPassword = (rule, value, callback, form) => {
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	};

	const validateToNextPassword = (rule, value, callback, form) => {
		if (value) {
			form.validateFields(['confirm'], {force: true});
		}
		callback();
	};

	const formItemLayout = {
		labelCol: {
			xs: {span: 24},
			sm: {span: 8}
		},
		wrapperCol: {
			xs: {span: 24},
			sm: {span: 16}
		}
	};
	const tailFormItemLayout = {
		wrapperCol: {
			xs: {
				span: 24,
				offset: 0
			},
			sm: {
				span: 16,
				offset: 8
			}
		}
	};

	if (formSubmitted !== null) {
		form.resetFields();
	}

	return (
		<Form {...formItemLayout} onSubmit={handleSubmit}>
			<Form.Item
				label={
					<span>
						Username&nbsp;
						<Tooltip title="username must be unique?">
							<Icon type="question-circle-o" />
						</Tooltip>
					</span>
				}>
				{form.getFieldDecorator('username', {
					rules: [
						{
							required: true,
							message: 'Please input your username!',
							whitespace: true
						}
					]
				})(<Input />)}
			</Form.Item>
			<Form.Item label="E-mail">
				{form.getFieldDecorator('email', {
					rules: [
						{
							type: 'email',
							message: 'The input is not valid E-mail!'
						},
						{
							required: true,
							message: 'Please input your E-mail!'
						}
					]
				})(<Input />)}
			</Form.Item>
			<Form.Item label="Password">
				{form.getFieldDecorator('password', {
					rules: [
						{
							required: true,
							message: 'Please input your password!'
						},
						{
							validator: (rule, value, callback) =>
								validateToNextPassword(rule, value, callback, form)
						}
					]
				})(<Input.Password />)}
			</Form.Item>
			<Form.Item label="Confirm Password">
				{form.getFieldDecorator('confirm', {
					rules: [
						{
							required: true,
							message: 'Please confirm your password!'
						},
						{
							validator: (rule, value, callback) =>
								compareToFirstPassword(rule, value, callback, form)
						}
					]
				})(<Input.Password />)}
			</Form.Item>

			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit" loading={loading}>
					Register
				</Button>{' '}
				Already a user <Link to="/">Login</Link>
			</Form.Item>
		</Form>
	);
};

export default Form.create({name: 'register_form'})(RegisterForm);
