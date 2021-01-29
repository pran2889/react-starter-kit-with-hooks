import { useContext, useState, useCallback, useEffect } from "react";
import { StoreContext } from "../../context/store/storeContext";
import useGetData from "../../hooks/getHook";
import usePostData from "../../hooks/postHook";

const Layout1 = (props) => {
    const { state } = useContext(StoreContext);
    const [body, setBody] = useState([]);
    const { postData, refreshPostData } = usePostData({
        response: [],
        error: "",
        isLoading: true,
        URL: ``,
        body: body
    });
    const { getData, refreshGetData } = useGetData({
        response: [],
        error: "",
        isLoading: true,
        URL: ``,
    });
    useEffect(() => {
        setBody(state.generalStates.data);
    }, [])
    const InvokeAPI = useCallback(() => {
        refreshPostData(`/posts`, body);
    }, [refreshPostData]);
    const InvokeGetAPI = useCallback(() => {
        refreshGetData(`/todos/1`);
    }, [refreshGetData]);

    return (
        <>
            <h1>Layout</h1>
            <button onClick={InvokeAPI}>Invoke API</button>
            <h1> {JSON.stringify(state.generalStates.data)}</h1>

            <button onClick={InvokeGetAPI}>Invoke API</button>
            <h1> {JSON.stringify(getData.response)}</h1>
        </>
    );
};

export default Layout1;