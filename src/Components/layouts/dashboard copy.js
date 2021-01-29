import { useEffect, useContext } from "react";
import auth from "../Authentication/auth";
import { withRouter } from "react-router-dom";
import { StoreContext } from "../../context/store/storeContext";
import Layout from "./layout";
import useGetData from "../../hooks/getHook";
const url = `/todos/3`;
const Dashboard1 = (props) => {
    const { state, actions } = useContext(StoreContext);
    const { getData } = useGetData({
        response: [],
        error: "",
        isLoading: true,
        URL: url
    });
    useEffect(() => {
        if (getData && getData.response) {
            actions.generalActions.getInfo(getData.response);
        }
    }, [getData])
    // useEffect(() => {
    //     debugger
    //     if (response) {
    //         actions.generalActions.getInfo(response.data);
    //     }
    // }, [response])
    // useEffect(() => {
    //     axiosinstance()
    //         .get(`https://jsonplaceholder.typicode.com/todos/2`)
    //         .then((sucess) => {
    //             actions.generalActions.getInfo(sucess.data);
    //         }, (error) => {

    //         });
    // }, []);
    return (
        <div>{getData.isLoading ? <h1> 'Loading...'</h1> :
            <>
                <h1>Dashboard</h1>
                <button onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}>Logout</button>
                <Layout></Layout>
            </>
        }
        </div>
    );
};

export default withRouter(Dashboard1);