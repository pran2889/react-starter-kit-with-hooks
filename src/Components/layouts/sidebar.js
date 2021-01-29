import React, { useState } from 'react'

import { Layout, Menu, Typography, Divider } from 'antd';
import { PlusOutlined, HomeOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom'
const Sidebar = () => {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    const { Text } = Typography;

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    }
    return (
        <>
            <Sider
                // breakpoint="lg"
                // collapsedWidth="0"
                // trigger={null} 
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
                // width={200}
                style={{
                    height: '100%'
                }}
            >
                <div className="logo_div">
                    <Link exact="true" to='/' style={{ width: '100%' }}>
                        <div className="logo"><Text style={{ color: '#fff', fontSize: '22px' }}>AkounterHR</Text></div>
                        {/* <div style={{color:'#fff', fontSize:'x-large'}}>
                                {React.createElement(this.state.collapsed ? MenuOutlined : MenuOutlined, {
                                    className: 'trigger',
                                    onClick: this.toggle,
                                })}
                            </div> */}
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1', 'sub_rep_1', 'sub_mas_1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link exact="true" to="/">Dashboard</Link>
                    </Menu.Item>
                    {/* <Divider orientation='left'>My</Divider> */}
                    <Menu.Item key="sub1_1" className="sidebar_item">
                        Connects
                                <span className="add_new"><PlusOutlined style={{ fontSize: '18px' }} /></span>
                    </Menu.Item>
                    <Menu.Item key="sub1_2" className="sidebar_item">
                        Meetings
                                <span className="add_new"><PlusOutlined style={{ fontSize: '18px' }} /></span>
                    </Menu.Item>
                    <Menu.Item key="sub1_3" className="sidebar_item">
                        Groups
                                <span className="add_new"><PlusOutlined style={{ fontSize: '18px' }} /></span>
                    </Menu.Item>
                    <Menu.Item key="sub1_4" className="sidebar_item">
                        Search Users
                            </Menu.Item>
                    {/* <Divider orientation='left'>Campaign</Divider> */}
                    <Menu.Item key="sub_rep_1_1" className="sidebar_item">
                        Campaign Details
                            </Menu.Item>
                    <Menu.Item key="sub_rep_1_2" className="sidebar_item">
                        Groups
                            </Menu.Item>
                    <Menu.Item key="sub_rep_1_3" className="sidebar_item">
                        Email
                            </Menu.Item>
                    <Menu.Item key="sub_rep_1_4" className="sidebar_item">
                        SMS
                            </Menu.Item>
                    <Menu.Item key="sub_rep_1_5" className="sidebar_item">
                        WhatsApp
                            </Menu.Item>
                    <Menu.Item key="sub_rep_1_6" className="sidebar_item">
                        Roles & Users
                            </Menu.Item>
                    <Menu.Item key="sub_rep_1_7" className="sidebar_item">
                        Assigned Connects
                            </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
};

export default Sidebar;