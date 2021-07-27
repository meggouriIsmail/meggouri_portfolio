import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Login from './Login';

const AddProject = ({ history }) => {

    const [name, setName] = useState();
    const [token, setToken] = useState(null);
    const [techs, setThecks] = useState();
    const [url, setUrl] = useState();
    const [img, setImg] = useState();

    useEffect(() => {
        const tokenStorage = localStorage.getItem("token");
        if (tokenStorage) {
            setToken(tokenStorage);
        }
    }, []);

    function movefile(e) {
        e.preventDefault();
        console.log(name, techs, url, img);
        // var myObject = GetFile("c:\\test.txt");

        // myObject.Copyfile("C:\\Users\\Meggouri\\Desktop\\coding\\web\\meggo_portfolio\\public\\assets\\images", img)
    }

    function AddProj() {
        axios.post(`http://localhost:8888/projects`, {
            name: name,
            techs: techs,
            url: url,
            img: img,
        }).then((response) => {
            console.log(response.data);
        });
    }

    if (!token) {
        return <Login />;
    } else {
        return (
            <div>
                <h2 style={{ color: 'white', margin: '4rem' }}>Add a Project Here</h2>
                <form className="form" onSubmit={e => { movefile(e) }}>
                    <div className="contact-info">
                        <input type="text" className="form__input" placeholder=" " name="name" onChange={e => { setName(e.target.value) }} />
                        <label htmlFor="" className="form__label">Name</label>
                    </div>
                    <div className="contact-info">
                        <input type="text" className="form__input" placeholder=" " name="techs" onChange={e => { setThecks(e.target.value) }} />
                        <label htmlFor="" className="form__label">Techs</label>
                    </div>
                    <div className="subject">
                        <input type="file" className="form__input" placeholder=" " name="img" onChange={e => { setImg(e.target.value) }} />
                        <label htmlFor="" className="form__label" style={{ background: 'transparent' }}>Image</label>
                    </div>
                    <div className="subject">
                        <input type="text" className="form__input" placeholder=" " name="url" onChange={e => { setUrl(e.target.value) }} />
                        <label htmlFor="" className="form__label">Url</label>
                    </div>
                    <div style={{ alignSelf: 'flex-start' }}>
                        <button type="submit" value="Send" className="send-btn" >
                            <img src={`${process.env.PUBLIC_URL}/assets/icons/save_data_28px.png`} alt="Send" />
                        </button>
                        <button className="send-btn" onClick={() => { history.push(`${process.env.PUBLIC_URL}/dashboard`) }}>
                            <img src={`${process.env.PUBLIC_URL}/assets/icons/cancel_28px.png`} alt="Send" />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;