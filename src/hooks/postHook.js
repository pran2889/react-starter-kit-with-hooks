import { useEffect, useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../helper/axiosinstance";

const usePostData = initialState => {
    const isFetching = useRef(true);
    const [postData, setData] = useState(initialState);

    const fetchData = async () => {
        try {
            if (postData.URL !== ``) {
                const res = await axiosInstance().post(`${postData.URL}`, JSON.stringify(postData.BODY));
                setData({
                    response: res.data,
                    error: "",
                    isLoading: false
                });
            }
        } catch (error) {
            setData({
                response: [],
                error: error.toString(),
                isLoading: false
            });
        }
    };

    const refreshPostData = useCallback(
        (URL, BODY) => {
            setData({ ...initialState, URL, BODY });
            isFetching.current = true;
        },
        [initialState]
    );

    useEffect(() => {
        if (isFetching.current) {
            isFetching.current = false;
            fetchData();
        }
    }, [isFetching.current]);
    return {
        postData,
        refreshPostData
    };
};

usePostData.propTypes = {
    initialState: PropTypes.shape({
        response: PropTypes.any,
        error: PropTypes.string,
        isLoading: PropTypes.bool.isRequired,
        URL: PropTypes.string.isRequired
    }).isRequired
};

export default usePostData;