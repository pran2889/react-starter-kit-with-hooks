import { Layout, Menu, Avatar, Typography, Row, Col, Popover, Space, Divider, Image, } from 'antd';
import { ArrowUpOutlined, LogoutOutlined, FileTextOutlined, UserOutlined, BellOutlined, } from '@ant-design/icons';

import { Link, withRouter } from 'react-router-dom'
import auth from '../Authentication/auth';

const Navbar = (props) => {

    const { Header } = Layout;
    const { Text } = Typography;
    const notification_data = (
        <div style={{ width: '300px' }}>
            <Space direction="vertical">
                <Space>
                    <Avatar style={{ backgroundColor: 'orange' }} icon={<FileTextOutlined />} />
                    <Text>Invoice Created FIN000123</Text>
                </Space>
                <Divider style={{ margin: '5px 0' }} />
                <Space>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    <Text>Login Successful</Text>
                </Space>
            </Space>
        </div>
    );
    const profile_tab = (
        <div style={{ width: '200px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Link exact="true" to="/user_profile" style={{ display: 'inline-block', width: '100%' }}>
                    <Space>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <Text>View Profile</Text>
                    </Space>
                </Link>
                <Divider style={{ margin: '5px 0' }} />
                <Space>
                    <Avatar style={{ backgroundColor: '#fde3cf' }} icon={<ArrowUpOutlined />} />
                    <Text>Upgrade</Text>
                </Space>
                <Divider style={{ margin: '5px 0' }} />
                <Space onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}>
                    <Avatar style={{ backgroundColor: 'red' }} icon={<LogoutOutlined />} />
                    <Text>Logout</Text>
                </Space>
            </Space>
        </div>
    );

    return (
        <>
            <Header className="site-layout-background header" style={{ padding: '0 20px' }}>
                <Row wrap={false}>
                    <Col flex="">
                        <Image width={150} src="https://finsq.in/wp-content/uploads/2016/12/FinsQ-Logo.png" />
                    </Col>
                    <Col flex="auto">
                        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ textAlign: "right" }}>
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">
                                <Popover placement='bottomRight' content={notification_data} trigger="click">
                                    <span style={{ padding: '20px 0' }}><BellOutlined />Notification</span>
                                </Popover>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Popover placement='bottomRight' content={profile_tab} trigger="click">
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <Text style={{ padding: '20px 0 20px 10px' }}>Joe Marrow</Text>
                                </Popover>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        </>
    );
};

export default withRouter(Navbar);