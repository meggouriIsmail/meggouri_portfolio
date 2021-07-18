import axios from 'axios';
import React, { useState } from 'react';

function Login({ setToken, setData }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function Login(e) {
        e.preventDefault();
        axios.post('http://localhost:8888/login', {
            email: email,
            password: password
        }).then((response) => {
            setToken(response.data.token);
            setData(response.data.body);
        });
    }

    return (
        <>
            <div style={{ margin: '100px 50px', color: 'white' }}>
                <h2>Welcome Admin</h2>
            </div>
            <form onSubmit={e => { Login(e) }}>
                <div className="contact-info">
                    <input type="text" className="form__input" placeholder=" " name="email" onChange={e => { setEmail(e.target.value) }} />
                    <label htmlFor="" className="form__label">your email</label>
                </div>
                <div className="contact-info">
                    <input type="password" className="form__input" placeholder=" " name="password" onChange={e => { setPassword(e.target.value) }} />
                    <label htmlFor="" className="form__label">your name</label>
                </div>
                <button type="submit" value="Send" className="send-btn" >
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/paper_plane_28px.png`} alt="Send" />
                </button>
            </form>
        </>
    );
}

export default Login;