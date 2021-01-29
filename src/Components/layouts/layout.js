import { useContext, useState, useCallback, useEffect } from "react";
import { Layout, Select, Typography, Row, Col, Popover, Button, Space, Divider, Input, DatePicker, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './../../App.css';
const LayoutComponent = (props) => {

    const { Content } = Layout;

    const { Option } = Select;
    const { Text, Title } = Typography;

    const content = (
        <div>
            <p>22-B, Tower B2</p>
            <p>Spaze iTech Park</p>
            <p>Sector 49</p>
            <p>Gurugram</p>
            <p>122001</p>
            <p>Haryana</p>
        </div>
    );

    const { Panel } = Collapse;
    const { TextArea } = Input;

    return (
        <Layout style={{ padding: '12px' }}>
            <Content
                className="site-layout-background"
                style={{
                    padding: 12,
                    margin: 0,
                    minHeight: 200,
                }}
            >
                <div className="heading">
                    <Title level={3}>New Invoice</Title>
                </div>

                <Divider />

                <div>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Row gutter={[8, 8]}>
                            <Col xs={6} sm={6} md={6} lg={4} xl={4}>
                                <Text type="danger">Customer*</Text>
                            </Col>
                            <Col xs={18} sm={18} md={18} lg={12} xl={12}>
                                <Select defaultValue="choose" style={{}}>
                                    <Option value="choose">Select Customer</Option>
                                    <Option value="1">Customer A</Option>
                                    <Option value="2">Customer B</Option>
                                    <Option value="disabled" disabled>
                                        Disabled Customer C
                                        </Option>
                                    <Option value="3">Customer D</Option>
                                </Select>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} align='center'>
                                <Space>
                                    <Popover content={content} title="Billing Address">
                                        <Button type="primary" shape="round">BILLING</Button>
                                    </Popover>
                                </Space>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} align='center'>
                                <Space>
                                    <Popover content={content} title="Shipping Address">
                                        <Button type="primary" shape="round">SHIPPING</Button>
                                    </Popover>
                                </Space>
                            </Col>
                        </Row>

                        <Row gutter={[8, 8]} align="middle">
                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                <Text type="danger">Place of Supply*</Text>
                            </Col>
                            <Col xs={16} sm={16} md={16} lg={12} xl={12}>
                                <Select defaultValue="choose" style={{ width: 'auto' }}>
                                    <Option value="choose">Select State</Option>
                                    <Option value="1">Haryana</Option>
                                    <Option value="2">Delhi</Option>
                                    <Option value="3">Chandigarh</Option>
                                </Select>
                            </Col>
                        </Row>
                    </Space>

                    <Divider />
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Row gutter={[8, 8]}>
                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                <Text type="danger">Invoice No.*</Text>
                            </Col>
                            <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                <Input placeholder="Invoice No." />
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                <Text type="danger">Invoice Date*</Text>
                            </Col>
                            <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                <DatePicker />
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                <Text type="danger">Due Date*</Text>
                            </Col>
                            <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                <DatePicker />
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                <Text>Terms</Text>
                            </Col>
                            <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                <Select defaultValue="1">
                                    <Option value="1">Receipt</Option>
                                    <Option value="2">Challan</Option>
                                    <Option value="3">Terms abc</Option>
                                </Select>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                <Text>Reference No.</Text>
                            </Col>
                            <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                <Input />
                            </Col>
                        </Row>
                    </Space>
                    <Divider style={{ marginBottom: '5px' }} />
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Row>
                            <Col span={24}>
                                <Collapse bordered={false} ghost>
                                    <Panel
                                        header={
                                            <Button type="primary" shape="round">
                                                Extra Details <DownOutlined />
                                            </Button>
                                        }
                                        key="1"
                                        showArrow={false}
                                    >
                                        <Space style={{ width: '100%', padding: '10px', background: "#f0f2f5", borderRadius: '10px' }}>
                                            <Row gutter={[8, 8]}>
                                                <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                                    <Text>Buyer's Order no.</Text>
                                                </Col>
                                                <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                                    <Input />
                                                </Col>
                                                <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                                    <Text>Delivery Note</Text>
                                                </Col>
                                                <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                                    <Input />
                                                </Col>
                                                <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                                    <Text>Delivered Through</Text>
                                                </Col>
                                                <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                                    <Select defaultValue="1">
                                                        <Option value="1">By Hand</Option>
                                                        <Option value="2">By Courier</Option>
                                                        <Option value="3">By Post</Option>
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </Space>
                                    </Panel>
                                </Collapse>
                            </Col>
                        </Row>
                    </Space>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Row>
                            <Col span={24}>
                                {/* <EditableTable /> */}
                            </Col>
                        </Row>
                    </Space>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Row justify="end">
                            <Col xs={6} sm={6} md={6} lg={3} xl={3}>Sub Total</Col>
                            <Col align="right" xs={6} sm={6} md={6} lg={3} xl={3}>0.00</Col>
                        </Row>
                        <Row justify="end">
                            <Col xs={6} sm={6} md={6} lg={3} xl={3}>Discount</Col>
                            <Col align="right" xs={6} sm={6} md={6} lg={3} xl={3}>0.00</Col>
                        </Row>
                        <Row justify="end" style={{ fontSize: 'large' }}>
                            <Col xs={6} sm={6} md={6} lg={3} xl={3}>Total (Rs.)</Col>
                            <Col align="right" xs={6} sm={6} md={6} lg={3} xl={3}>0.00</Col>
                        </Row>
                    </Space>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <Collapse bordered={false} ghost>
                                    <Panel
                                        header={
                                            <Button type="primary" shape="round">
                                                Bank Details <DownOutlined />
                                            </Button>
                                        }
                                        key="1"
                                        showArrow={false}
                                    >
                                        <Row style={{ padding: "10px 0" }} >
                                            <Col span={10}>
                                                <Text>Account Number</Text>
                                            </Col>
                                            <Col span={14}>
                                                <Text>6473267598</Text>
                                            </Col>
                                        </Row>
                                        <Row style={{ padding: "10px 0" }} >
                                            <Col span={10}>
                                                <Text>IFSC Code</Text>
                                            </Col>
                                            <Col span={14}>
                                                <Text>KKBK0007654</Text>
                                            </Col>
                                        </Row>
                                        <Row style={{ padding: "10px 0" }} >
                                            <Col span={10}>
                                                <Text>Bank Name</Text>
                                            </Col>
                                            <Col span={14}>
                                                <Text>Kotak Mahindra Bank</Text>
                                            </Col>
                                        </Row>
                                        <Row style={{ padding: "10px 0" }} >
                                            <Col span={10}>
                                                <Text>Branch Address</Text>
                                            </Col>
                                            <Col span={14}>
                                                <Text>Sector- 22, Gurgaon</Text>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                            </Col>
                        </Row>
                    </Space>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Row>
                            <Col span={24}>
                                <Collapse bordered={false} ghost>
                                    <Panel
                                        header={
                                            <Button type="primary" shape="round">
                                                Transport <DownOutlined />
                                            </Button>
                                        }
                                        key="1"
                                        showArrow={false}
                                    >
                                        <Row gutter={[8, 8]} style={{ padding: "15px 0" }} >
                                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                                <Text>E-Way Bill No.</Text>
                                            </Col>
                                            <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                                <Input style={{ width: 'auto' }} />
                                            </Col>
                                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                                <Text>LR No.</Text>
                                            </Col>
                                            <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                                <Input style={{ width: 'auto' }} />
                                            </Col>
                                            <Col xs={8} sm={8} md={8} lg={4} xl={4}>
                                                <Text>Challan No.</Text>
                                            </Col>
                                            <Col xs={16} sm={16} md={16} lg={4} xl={4}>
                                                <Input style={{ width: 'auto' }} />
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                            </Col>
                        </Row>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Row gutter={[8, 8]} justify="space-between" align="bottom" style={{ paddingTop: '25px' }}>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                                <Text style={{ fontSize: "large" }}>Terms & Conditions</Text>
                                <TextArea rows={4} allowClear />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <Text style={{ fontSize: "large" }}>Customer Notes</Text>
                                <TextArea rows={3} allowClear />
                            </Col>
                        </Row>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Row justify="end" style={{ padding: '15px 0 0' }}>
                            <Col xs={12} sm={12} md={12} lg={4} xl={2} align="center">
                                {/* <InvoiceTemplatePDF /> */}
                                {/* <Button type="primary" shape="round">Save</Button> */}
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} xl={2} align="center">
                                <Button type="danger" shape="round">Cancel</Button>
                            </Col>
                        </Row>
                    </Space>
                </div>
            </Content>
        </Layout>
    );
};

export default LayoutComponent;