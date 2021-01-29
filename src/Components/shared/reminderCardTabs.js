import { useState } from "react";
import { Card } from 'antd';
import Birthday from "./birthday";
import FollowUp from "./followUp";
import WeekTask from "./weekTask";
const BLACK = "#ccc";
const styles = {
    card: {
        boxShadow: `1px 1px 6px 1px ${BLACK}`
    },
    border: {
        borderRadius: 20
    },
}
const ReminderCardTabs = (props) => {

    const [state, setState] = useState({
        key: 'tab1',
        noTitleKey: 'Follow-Up',
    });
    const tabList = [
        {
            key: 'tab1',
            tab: 'Follow-Up',
        },
        {
            key: 'tab2',
            tab: 'Birthdays',
        },
        {
            key: 'tab3',
            tab: 'Weekly Tasks',
        },
    ];
    const contentList = {
        tab1: <FollowUp />,
        tab2: <Birthday />,
        tab3: <WeekTask />,
    };

    const onTabChange = (key, type) => {
        setState({ [type]: key });
    };
    return (
        <Card
            style={{ width: '100%', height: '640px', ...styles.card, ...styles.border }}
            title="Reminders"
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

export default ReminderCardTabs;