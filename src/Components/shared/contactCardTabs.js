import { useState, useEffect } from "react";
import { Card } from 'antd';
import ContactList from "./contactList";
import useGetData from "../../hooks/getHook";
import { GET_CONNECTS_AGING } from "../../Constants/apis";
const BLACK = "#ccc";
const styles = {
    card: {
        boxShadow: `1px 1px 6px 1px ${BLACK}`
    },
    border: {
        borderRadius: 20
    },
}

const ContactCardTabs = (props) => {
    // const [data, setData] = useState([]);
    // const connectAgings = useGetData({
    //     response: null,
    //     error: "",
    //     isLoading: true,
    //     URL: GET_CONNECTS_AGING
    // });
    // useEffect(() => {
    //     if (connectAgings.getData && connectAgings.getData.response) {
    //         debugger;
    //         setData(connectAgings.getData.response);
    //     }
    // }, [connectAgings.getData]);

    const tabList = [
        {
            key: 'tab1',
            tab: '< 1 Week',
        },
        {
            key: 'tab2',
            tab: '< 1 Month',
        },
        {
            key: 'tab3',
            tab: '< 6 Months',
        },
    ];

    const contentList = {
        tab1: <ContactList />,
        tab2: <ContactList />,
        tab3: <ContactList />,
    };
    const [state, setState] = useState({
        key: 'tab1',
        noTitleKey: 'Follow-Up',
    });
    const onTabChange = (key, type) => {
        setState({ [type]: key });
    };
    return (

        <Card
            style={{ width: '100%', height: '467px', ...styles.card, ...styles.border }}
            title="Contacts Aging"
            //   extra={<a href="#">More</a>}
            tabList={tabList}
            activeTabKey={state.key}
            onTabChange={key => {
                onTabChange(key, 'key');
            }}
        >
            {contentList[state.key]}
        </Card>
    );
};

export default ContactCardTabs;