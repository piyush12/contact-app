import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Radio, Input, Button, Select} from 'antd';

const {Option} = Select;

const AddContact = ({form}) => {
	// submit function register
	const handleSubmit = e => {
		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
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

	const prefixSelector = form.getFieldDecorator('prefix', {
		initialValue: '86'
	})(
		<Select style={{width: 70}}>
			<Option value="86">+86</Option>
			<Option value="87">+87</Option>
		</Select>
	);

	return (
		<React.Fragment>
			<Link to="/dashboard" className="addContact">
				+ Dashboard
			</Link>
      <div className="clearfix" />
				<div className="add-form">
					<h1>Add Contact</h1>
					<Form {...formItemLayout} onSubmit={handleSubmit}>
						<Form.Item label={'Name'}>
							{form.getFieldDecorator('nickname', {
								rules: [
									{
										required: true,
										message: 'Please input your nickname!',
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

						<Form.Item label="Phone Number">
							{form.getFieldDecorator('phone', {
								rules: [{required: true, message: 'Please input your phone number!'}]
							})(<Input addonBefore={prefixSelector} style={{width: '100%'}} />)}
						</Form.Item>

						<Form.Item label="Contact Access">
							{form.getFieldDecorator('access', {
								rules: [{required: true, message: 'please select access'}]
							})(
								<Radio.Group>
									<Radio value="public">Public</Radio>
									<Radio value="private">Private</Radio>
								</Radio.Group>
							)}
						</Form.Item>

						<Form.Item {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								Add Contact
							</Button>
						</Form.Item>
					</Form>
				</div>
		</React.Fragment>
	);
};

export default Form.create({name: 'contact_form'})(AddContact);
