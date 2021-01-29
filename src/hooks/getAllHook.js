import { useEffect, useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../helper/axiosinstance";

const useGetAllData = initialState => {
    const isFetching = useRef(true);
    const [getData, setData] = useState(initialState);

    const fetchData = async () => {
        try {
            if (getData.URLS.length > 0) {
                let urlArr = [];
                getData.URLS.forEach(url => {
                    urlArr.push(axiosInstance().get(url));
                });
                Promise.all(urlArr).then(function (responses) {
                    return Promise.all(responses.map(function (response) {
                        return response.data;
                    }));
                }).then(function (data) {
                    setData({
                        response: data,
                        error: "",
                        isLoading: false
                    });
                }).catch(function (error) {
                    setData({
                        response: null,
                        error: "",
                        isLoading: false
                    });
                });

            }
        } catch (error) {
            setData({
                response: null,
                error: error.toString(),
                isLoading: false
            });
        }
    };

    const refreshGetData = useCallback(
        (URLS) => {
            setData({ ...initialState, URLS });
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

useGetAllData.propTypes = {
    initialState: PropTypes.shape({
        response: PropTypes.any,
        error: PropTypes.string,
        isLoading: PropTypes.bool.isRequired,
        URLS: PropTypes.array.isRequired
    }).isRequired
};

export default useGetAllData;