import React, { useState } from 'react';
import auth from "./auth";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Row, Col, Card, Form, Divider, Input, Button, Image, Typography } from 'antd';
import { UserOutlined, LockOutlined, ApiTwoTone, NotificationTwoTone, ReconciliationTwoTone, RocketTwoTone } from '@ant-design/icons';
const { Title } = Typography;

const Login = (props) => {
    const initialState = {
        username: '',
        password: '',
        device_id: "55"
    }
    const [loginData, setLoginData] = useState(initialState);

    const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        auth.login(loginData, () => {
            props.history.push("/dashboard");
        });
    };
    return (
        <Layout className="bg-img-full">
            <Row className="top-row-height-login">

            </Row>
            <Row justify="center" >
                <Col sm={10} md={8} lg={6} xl={6} >

                    <Card
                        hoverable
                        className="login-card-form-login"

                    >
                        <Image
                            preview={false}
                            src="https://akounterhr.com/static/images/akounter_logo.png"
                            className="ak-logo-login"
                        />
                        <Divider />
                        <p className="login-title-form-login" >Akounter Konnect</p>
                        <br />
                        <Form
                            name="normal_login"
                            className="login-form"
                        >
                            <Form.Item
                                className="login-form-password"
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" className="field-rj-login" name="username"
                                    value={loginData.username}
                                    onChange={e => onChange(e)}
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}

                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    className="field-rj-login"
                                    name="password"
                                    value={loginData.password}
                                    onChange={e => onChange(e)}
                                    minLength='6'
                                    required
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button-login" onClick={handleSubmit}>
                                    Log in
                </Button><br />
                                <br /><p className="p-bottom-text-login">Forgot Password ? <a href="/forget">Click Here</a>
                                    <br />Don't have an account ? <Link to="/register">Click Here</Link></p>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={12} className="block-mobile-tablet-hidden">
                    <Row className="bottom-row-height">
                    </Row>
                    <Row>
                        <Col span={2}>
                        </Col>
                        <Col span={22}>
                            <Title className="center">Manage your connections.</Title>
                        </Col>
                    </Row>

                    <Card
                        className="card-login-vp-login">

                        <Row justify="space-between" align="bottom">

                            <Col span={2}>
                                <ApiTwoTone style={{ fontSize: '50px', color: '#08c' }} />
                                <p className="center">Contact management</p>
                            </Col>
                            <Col span={2}>
                                <NotificationTwoTone style={{ fontSize: '50px', color: '#08c' }} />
                                <p className="center">Campaign management</p>
                            </Col>
                            <Col span={2}>
                                <ReconciliationTwoTone style={{ fontSize: '50px', color: '#08c' }} />
                                <p className="center">Advance Reporting</p>
                            </Col>
                            <Col span={2}>
                                <RocketTwoTone style={{ fontSize: '50px', color: '#08c' }} />
                                <p className="center">Email/SMS/<br />WhatsApp</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="bottomtt-row-height-login">
            </Row>
        </Layout>
        // <button onClick={() => {
        //     auth.login(user, () => {
        //         props.history.push("/dashboard");
        //     });
        // }}>Login</button>
    );
}

export default Login;