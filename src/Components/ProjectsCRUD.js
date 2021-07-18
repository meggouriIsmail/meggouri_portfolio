import React from 'react';
import { useState } from 'react';
import Login from './Login';
import '../style/projTable.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectsCRUD = () => {

    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);

    if (!token) {
        return <Login setToken={setToken} setData={setData} />
    } else {
        return (
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
        );
    }
}

export default ProjectsCRUD;