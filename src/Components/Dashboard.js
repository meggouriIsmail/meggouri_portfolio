import React, { useEffect, useState } from 'react';
import '../style/projTable.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';

const Dashboard = ({ history }) => {

    const [token, setToken] = useState();
    const [data, setData] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push(`${process.env.PUBLIC_URL}/login`);
    }

    useEffect(() => {
        const tokenStorage = localStorage.getItem("token");
        if (tokenStorage) {
            setToken(tokenStorage);
        }
        axios.get(`http://localhost:8888/projects`).then((response) => {
            setData(response.data);
        });
    }, []);

    if (!token) {
        return <Login />;
    } else {
        return (
            <div className="body">
                <div className="btns-display">
                    <Link to={`${process.env.PUBLIC_URL}/add`}>
                        <button className="btn-Add" >Add Project</button>
                    </Link>
                    <button className="btn-log" onClick={handleLogout}>Logout</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Url</th>
                            <th>Name</th>
                            <th>Thechs</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(d => {
                            return (
                                <tr key={d.id}>
                                    <td>{d.id}</td>
                                    <td><img src={process.env.PUBLIC_URL + d.img} className="imgT" alt={d.img} /></td>
                                    <td>{d.url}</td>
                                    <td>{d.name}</td>
                                    <td>{d.techs}</td>
                                    <td>
                                        <Link to={`${process.env.PUBLIC_URL}/delete/${d.id}`}>
                                            <button type="submit" value="Update" className="btns btnDel" >
                                                Delete
                                            </button>
                                        </Link>
                                        <Link to={`${process.env.PUBLIC_URL}/update/${d.id}`}>
                                            <button type="submit" value="Delete" className="btns btnUpd" >
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Dashboard;