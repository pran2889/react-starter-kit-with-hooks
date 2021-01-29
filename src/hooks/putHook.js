import { useEffect, useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../helper/axiosinstance";

const usePutData = initialState => {
    const isFetching = useRef(true);
    const [putData, setData] = useState(initialState);

    const fetchData = async () => {
        try {
            if (putData.URL !== ``) {
                const res = await axiosInstance().put(`${putData.URL}`, JSON.stringify(putData.BODY));
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

    const refreshPutData = useCallback(
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
        putData,
        refreshPutData
    };
};

usePutData.propTypes = {
    initialState: PropTypes.shape({
        response: PropTypes.any,
        error: PropTypes.string,
        isLoading: PropTypes.bool.isRequired,
        URL: PropTypes.string.isRequired
    }).isRequired
};

export default usePutData;