import { useEffect, useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../helper/axiosinstance";

const useDeleteData = initialState => {
    const isFetching = useRef(true);
    const [deleteData, setData] = useState(initialState);

    const fetchData = async () => {
        try {
            if (deleteData.URL !== ``) {
                const res = await axiosInstance().delete(`${deleteData.URL}`);
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

    const refreshDeleteData = useCallback(
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
        deleteData,
        refreshDeleteData
    };
};

useDeleteData.propTypes = {
    initialState: PropTypes.shape({
        response: PropTypes.any,
        error: PropTypes.string,
        isLoading: PropTypes.bool.isRequired,
        URL: PropTypes.string.isRequired
    }).isRequired
};

export default useDeleteData;