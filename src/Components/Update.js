import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./Login";

const Update = ({ match, history }) => {

    const [token, setToken] = useState(null);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        const tokenStorage = localStorage.getItem("token");
        if (tokenStorage) {
            setToken(tokenStorage);
        }
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8888/project/${match.params.id}`).then((response) => {
            setData(response.data);
        });
    }, [match.params.id]);

    if (!token) {
        return <Login />;
    } else {
        return (
            <div style={{ height: '300px', background: 'azure', width: '500px' }}>update page {data[0].id}</div>
        );
    }
}

export default Update;