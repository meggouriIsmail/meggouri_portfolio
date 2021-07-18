import axios from "axios";
import { useEffect } from "react";

const Delete = ({ match }) => {

    useEffect(() => {
        axios.get(`http://localhost:8888/project/${match.params.id}`).then((response) => {
            console.log(response.data);
        });
    }, [])

    return (
        <div>eztzyeyzez</div>
    );
}

export default Delete;