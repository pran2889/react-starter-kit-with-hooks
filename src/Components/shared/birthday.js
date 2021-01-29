import { useContext } from "react";
import { List, Avatar, Spin } from 'antd';
import { StoreContext } from "../../context/store/storeContext";

const Birthday = () => {
    const { state } = useContext(StoreContext);
    return (
        <div className="demo-infinite-container-weektask">
            {/* <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                > */}
            <List
                dataSource={state.generalStates.todaysBirthday}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={<p>{item.name.last}</p>}
                            description={item.email}
                        />
                        <div></div>
                    </List.Item>
                )}
            >
                {false && (
                    <div className="demo-loading-container">
                        <Spin />
                    </div>
                )}
            </List>
            {/* </InfiniteScroll> */}
        </div>
    );
};

export default Birthday;