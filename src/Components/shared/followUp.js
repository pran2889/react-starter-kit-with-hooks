import { useEffect, useState } from "react";
import { List, message, Avatar, Spin } from 'antd';
import useGetData from "../../hooks/getHook";
const fakeDataUrl = '';
const FollowUp = () => {
    const [data, setData] = useState([]);
    const { getData } = useGetData({
        response: [],
        error: "",
        isLoading: true,
        URL: fakeDataUrl
    });
    useEffect(() => {
        if (getData && getData.response) {
            setData(getData.response);
        }
    }, [getData]);
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
                dataSource={data}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            // avatar={
                            //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            // }
                            title={<p>{item.name.last}</p>}
                            description={item.email}
                        />
                        <div></div>
                    </List.Item>
                )}
            >
                {getData.isLoading && (
                    <div className="demo-loading-container">
                        <Spin />
                    </div>
                )}
            </List>
            {/* </InfiniteScroll> */}
        </div>
    );
};

export default FollowUp;