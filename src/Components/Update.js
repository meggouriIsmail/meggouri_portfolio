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

    function DeleteProject() {
        axios.delete(`http://localhost:8888/project/${match.params.id}`).then((res => {
            console.log(res);
        }))
    }

    if (!token) {
        return <Login />;
    } else {
        return (
            <div className="card">
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + data[0].img} alt={data[0].img} style={{ width: '100%' }} />
                    <h1>{data[0].name}</h1>
                    <p className="title-card">{data[0].techs}</p>
                    <p style={{ padding: '0 10px 50px 10px' }}>{data[0].url}</p>
                </div>
                <button className="btn-del" onClick={DeleteProject}>
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/update_data_28px.png`} alt="Send" />
                </button>
                <button className="btn-cancel" onClick={() => { history.push(`${process.env.PUBLIC_URL}/dashboard`) }}>
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/cancel_28px.png`} alt="Send" />
                </button>
            </div>
        );
    }
}

export default Update;