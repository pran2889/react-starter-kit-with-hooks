import { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Typography, Divider, Row, Col, Card, Space } from 'antd';
import ReminderCardTabs from "../shared/reminderCardTabs";
import ContactCardTabs from "../shared/contactCardTabs";
import useGetAllData from "../../hooks/getAllHook";
import { GET_TODAYS_BIRTHDAY, GET_TOTAL_CONNETS, GET_CONNECTS_AGING } from "../../Constants/apis";
import { StoreContext } from "../../context/store/storeContext";
const Dashboard = () => {
    const BLACK = "#ccc";
    const styles = {
        card: {
            boxShadow: `1px 1px 6px 1px ${BLACK}`
        },
        border: {
            borderRadius: 20
        },
    }
    const { Content } = Layout;
    const { Title, Text } = Typography;
    const { state, actions } = useContext(StoreContext);
    const [totalConnects, setTotalConnects] = useState({ total_connects: 0 });
    const [connectsAgings, setConnectsAgings] = useState(null);
    const { getData } = useGetAllData({
        response: null,
        error: "",
        isLoading: true,
        URLS: [GET_TODAYS_BIRTHDAY, GET_TOTAL_CONNETS, GET_CONNECTS_AGING]
    });
    useEffect(() => {
        if (getData && getData.response) {
            actions.generalActions.setTodaysBirtdays(getData.response[0]);
            setTotalConnects(getData.response[1]);
            setConnectsAgings(getData.response[2]);
        }
    }, [getData]);
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
                    <Title level={3}>Dashboard</Title>
                </div>

                <Divider />

                <div>
                    <Space direction="vertical" style={{ width: '100%' }}>

                        <Row gutter={25}>
                            <Col className="gutter-row" md={24} lg={12} xl={12} xs={24} sm={24}>
                                <Row>
                                    <Col className="gutter-row" md={24} lg={24} xl={24} xs={24} sm={24}>
                                        <Card style={{ ...styles.border, ...styles.card }}>
                                            <p className="contact-conn">Total Connections</p>
                                            <p className="contact-conn">{totalConnects.total_connects}</p>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={24} lg={24} xl={24} xs={24} sm={24}>
                                        <ContactCardTabs {...connectsAgings} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={24} lg={12} xl={12} xs={24} sm={24}>
                                <ReminderCardTabs />
                            </Col>
                        </Row>
                    </Space>
                </div>
            </Content>
        </Layout>
    );
};

export default withRouter(Dashboard);