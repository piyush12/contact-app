import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Divider, Modal} from 'antd';



const Dashboard = () => {

  const [visible, setVisible] = React.useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => text
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phonenumber',
      key: 'phonenumber'
    },
    {
      title: 'Contact Access',
      dataIndex: 'access',
      key: 'access'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to="/edit-contact">Edit</Link>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={() => setVisible(true)}>Delete</a>
        </span>
      )
    }
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 32,
      phonenumber: 'New York No. 1 Lake Park',
      access: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 42,
      phonenumber: 'London No. 1 Lake Park',
      access: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 32,
      phonenumber: 'Sidney No. 1 Lake Park',
      access: ['cool', 'teacher']
    }
  ];

	return (
		<div>
			<Link to="/add-contact" className="addContact">
				+ Add Contact
			</Link>
			<div className="clearfix" />
			<div className="table">
				<Table columns={columns} dataSource={data} />
			</div>

      <Modal
          title="Delete Contact"
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          <h3>Are you sure want to delete?</h3>
        </Modal>
		</div>
	);
};

export default Dashboard;
