import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, Menu, Dropdown, Icon} from 'antd';

const menu = (
	<Menu>
		<Menu.Item key="2">
			<Link to="/login">Logout</Link>
		</Menu.Item>
	</Menu>
);

const Navigation = () => {
	return (
		<div className="pageHeading">
			<PageHeader
				title="Contact App"
				extra={[
					<Dropdown overlay={menu} trigger={['click']} key="1">
							<a className="ant-dropdown-link" href="#">
								Click me <Icon type="down" />
							</a>
					</Dropdown>
				]}
			/>
		</div>
	);
};

export default Navigation;
