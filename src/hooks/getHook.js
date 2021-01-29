import { useEffect, useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../helper/axiosinstance";

const useGetData = initialState => {
    const isFetching = useRef(true);
    const [getData, setData] = useState(initialState);

    const fetchData = async () => {
        try {
            if (getData.URL !== ``) {
                const res = await axiosInstance().get(`${getData.URL}`);
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

    const refreshGetData = useCallback(
        (URL) => {
            setData({ ...initialState, URL });
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
        getData,
        refreshGetData
    };
};

useGetData.propTypes = {
    initialState: PropTypes.shape({
        response: PropTypes.any,
        error: PropTypes.string,
        isLoading: PropTypes.bool.isRequired,
        URL: PropTypes.string.isRequired
    }).isRequired
};

export default useGetData;