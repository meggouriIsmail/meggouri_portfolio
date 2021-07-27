import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./Login";

const Update = ({ match, history }) => {

    const [token, setToken] = useState(null);
    const [data, setData] = useState([{}]);
    const [name, setName] = useState();
    const [techs, setThecks] = useState();
    const [url, setUrl] = useState();
    const [img, setImg] = useState();

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

    function movefile(e) {
        e.preventDefault();
        console.log(name, techs, url, img);
        // var myObject = GetFile("c:\\test.txt");

        // myObject.Copyfile("C:\\Users\\Meggouri\\Desktop\\coding\\web\\meggo_portfolio\\public\\assets\\images", img)
    }

    function AddProj() {
        axios.put(`http://localhost:8888/projects`, {
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
                <h2 style={{ color: 'white', margin: '4rem' }}>Update this Project</h2>
                <form className="form" onSubmit={e => { movefile(e) }}>
                    <div className="contact-info">
                        <input type="text" className="form__input" placeholder={data[0].name} name="name" onChange={e => { setName(e.target.value) }} />
                    </div>
                    <div className="contact-info">
                        <input type="text" className="form__input" placeholder={data[0].techs} name="techs" onChange={e => { setThecks(e.target.value) }} />
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + data[0].img} alt={data[0].img} style={{ width: '25%' }} />
                    </div>
                    <div className="subject">
                        <input type="file" className="form__input" placeholder="" name="img" onChange={e => { setImg(e.target.value) }} />
                    </div>
                    <div className="subject">
                        <input type="text" className="form__input" placeholder={data[0].url} name="url" onChange={e => { setUrl(e.target.value) }} />
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

export default Update;